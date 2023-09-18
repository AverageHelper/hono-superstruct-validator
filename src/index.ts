import type { Context, MiddlewareHandler, Env, ValidationTargets } from "hono";
import type { Infer, Struct, StructError } from "superstruct";
import { validate } from "superstruct";
import { validator } from "hono/validator";

/**
 * A function constructs a Hono response from the given {@link StructError}.
 *
 * @param error The error that occurred while trying to validate a Superstruct schema.
 * @param c The Hono request context.
 * @returns A response, or a promise that resolves with a response.
 */
export type OnError<E extends Env, Path extends string> = (
	error: StructError,
	c: Context<E, Path>
) => globalThis.Response | Promise<globalThis.Response>;

/**
 * Constructs simple validator middleware for Hono to ensure incoming data matches
 * a given Superstruct schema.
 *
 * @param target The format for which this validator should apply (i.e. `"json"` or `"form"`)
 * @param struct The Superstruct schema against which the request body should be strictly validated.
 * @param onError An optional callback to handle the {@link StructError} if the body could not be validated.
 * @returns Hono middleware that ensures later steps can get valid data from the request body.
 */
export const sValidator = <
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	T extends Struct<any, any>,
	Target extends keyof ValidationTargets,
	E extends Env,
	Path extends string,
	V extends {
		in: { [K in Target]: Infer<T> };
		out: { [K in Target]: Infer<T> };
	} = {
		in: { [K in Target]: Infer<T> };
		out: { [K in Target]: Infer<T> };
	}
>(
	target: Target,
	struct: T,
	onError?: OnError<E, Path>
): MiddlewareHandler<E, Path, V> =>
	validator<unknown, Path, string, Target, Infer<T>, string, V, E>(
		target,
		(value, c): Infer<T> | globalThis.Response | Promise<globalThis.Response> => {
			const [error, data] = validate<Infer<T>, T>(value, struct);

			if (error) {
				if (onError) {
					return onError(error, c);
				}
				return c.json({ message: error.message }, 400);
			}

			return data as unknown; // FIXME: This assertion should be unnecessary
		}
	);
