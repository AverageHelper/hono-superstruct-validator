# Superstruct validator middleware for Hono

Validator middleware using [Superstruct](https://docs.superstructjs.org) for [Hono](https://honojs.dev) applications.

You can write a schema with Superstruct and validate the incoming values.


## Usage

```ts
import { number, object, string } from "superstruct";
import { sValidator } from "hono-superstruct-validator";

const schema = object({
	name: string(),
	age: number()
});

app.post("/author", sValidator("json", schema), c => {
	const data = c.req.valid("json");
	return c.json({
		success: true,
		message: `${data.name} is ${data.age}`
	});
});
```

By default, if the incoming data does not match the given schema, a JSON object will be returned to the caller, with a status of 400. The response will have the following interface:

```ts
interface ResponseBody {
	message: string;
}
```

The message will, by default, be the `message` property of the relevant `StructError`.

If you wish to handle errors differently, you may include a callback function:

```ts
app.post(
	"/post",
	sValidator("json", schema, (result, c) => {
		return c.text("Invalid!", 400);
	})
	//...
);
```

At the moment, there is no opportunity to recover from the error. If the input data is bad, the middleware _will_ fail out and respond to the caller.

## Author

Average Helper <https://codeberg.org/AverageHelper>

Much of this work is based on [Yusuke Wada](https://github.com/yusukebe)'s wonderful work on [`@hono/zod-validator`](https://github.com/honojs/middleware/tree/main/packages/zod-validator).

## License

MIT
