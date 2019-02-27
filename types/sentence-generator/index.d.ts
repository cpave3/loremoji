declare module "sentence-generator";

declare class Gen {
  constructor(filepath: string);
  /**
   * Returns a string of with a total of count sentences.
   * @param count number
   */
  take(count: number): string;

  /**
   * Returns one sentence leaving any internal state unmutated.
   */
  run(): string;

  /**
   * Allows the for the creation of a sequence in a manner similar to a for loop. Each call returns the current state of accumulation.
   */
  generate(): string;

  /**
   * Resets any internal state persisted from previous method calls (such as generate or take). Useful with recursion an edge condition is met.
   */
  clear(): void;

  /**
   * Returns the current persisted state.
   */
  unwrap(): string;
}
