{
  type Check<T> = T extends string? boolean : number;
  type Type = Check<string>;
}