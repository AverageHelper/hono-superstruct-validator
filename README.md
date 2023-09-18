# Superstruct validator middleware for Hono

Validator middleware using [Superstruct](https://docs.superstructjs.org) for [Hono](https://honojs.dev) applications.

You can write a schema with Superstruct and validate the incoming values.

> This project is currently in development. There is currently nothing here.

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

Hook:

```ts
app.post(
	"/post",
	sValidator("json", schema, (result, c) => {
		if (!result.success) {
			return c.text("Invalid!", 400);
		}
	})
	//...
);
```

## Author

Average Helper <https://github.com/AverageHelper>

## License

MIT
