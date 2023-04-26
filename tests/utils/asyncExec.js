import { exec } from "child_process";

export async function asyncExec(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error.message);
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
}
