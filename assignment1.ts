//Is there an alternative method available to transpile our TypeScript code without executing the tsc command?

//ans: SWC, or Speedy Web Compiler, is a transpiler for JavaScript/TypeScript written completely in Rust.
// As such, it's much faster than anything you're going to get out of alternatives like tsc or babel. 

//SWC only transpiles the code and doesn't perform type checking. Therefore, it's recommended that you
// continue to use tsc for detecting any type errors.