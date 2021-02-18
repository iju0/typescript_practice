{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // Map Type
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // for ... in
  };
  type VideoOptional = Optional<Video>;

  const videoOp: VideoOptional = {
    title: "jung",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };

  animal.name = "cat"; // available

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "",
    description: "",
  };

  // null available
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
