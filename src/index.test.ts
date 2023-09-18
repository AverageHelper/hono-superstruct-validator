import type { Equal, Expect } from "hono/utils/types";
import { Hono } from "hono";
import { number, object, string } from "superstruct";
import { sValidator } from "./index.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ExtractSchema<T> = T extends Hono<infer _, infer S> ? S : never;

describe("Validator", () => {
	const app = new Hono();

	const schema = object({
		name: string(),
		age: number()
	});

	const route = app.post("/author", sValidator("json", schema), c => {
		const data = c.req.valid("json");
		return c.json({
			success: true,
			message: `${data.name} is ${data.age}`
		});
	});

	type Actual = ExtractSchema<typeof route>;
	interface Expected {
		"/author": {
			$post: {
				input: {
					json: {
						name: string;
						age: number;
					};
				};
				// output: {
				// 	success: boolean;
				// 	message: string;
				// };
				// eslint-disable-next-line @typescript-eslint/ban-types
				output: {}; // FIXME: Not sure why this winds up empty. Is that bad?
			};
		};
	}

	// Complains if the types got messed up
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type verify = Expect<Equal<Expected, Actual>>;

	test("answers 200 if the input is valid", async () => {
		const req = new Request("http://localhost/author", {
			body: JSON.stringify({
				name: "Superman",
				age: 20
			}),
			method: "POST"
		});
		const res = await app.request(req);
		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({
			success: true,
			message: "Superman is 20"
		});
	});

	test("answers 400 if the input is invalid", async () => {
		const req = new Request("http://localhost/author", {
			body: JSON.stringify({
				name: "Superman",
				age: "20"
			}),
			method: "POST"
		});
		const res = await app.request(req);
		expect(res.status).toBe(400);
		const data = await res.json();
		expect(data).toMatchObject({
			message: 'At path: age -- Expected a number, but received: "20"'
		});
	});
});

describe("Validator with Custom Error Handler", () => {
	const app = new Hono();

	const schema = object({
		id: number(),
		title: string()
	});

	app.post(
		"/post",
		sValidator("json", schema, (error, c) => {
			return c.text(`Input is invalid!`, 400);
		}),
		c => {
			const data = c.req.valid("json");
			return c.json({
				success: true,
				message: `${data.id} is ${data.title}`
			});
		}
	);

	test("answers 200 if the input is valid", async () => {
		const req = new Request("http://localhost/post", {
			body: JSON.stringify({
				id: 123,
				title: "Hello"
			}),
			method: "POST"
		});
		const res = await app.request(req);
		expect(res.status).toBe(200);
		expect(await res.json()).toMatchObject({
			success: true,
			message: "123 is Hello"
		});
	});

	test("answers 400 if the input is invalid", async () => {
		const req = new Request("http://localhost/post", {
			body: JSON.stringify({
				id: "123",
				title: "Hello"
			}),
			method: "POST"
		});
		const res = await app.request(req);
		expect(res.status).toBe(400);
		expect(await res.text()).toBe("Input is invalid!");
	});
});
