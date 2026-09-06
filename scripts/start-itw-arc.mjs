import { spawn } from 'node:child_process';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const child = spawn(
  npmCommand,
  ['run', 'dev', '--workspace=@workspace/itw-arc'],
  {
    env: {
      ...process.env,
      PORT: process.env.PORT ?? '5173',
      BASE_PATH: process.env.BASE_PATH ?? '/',
    },
    stdio: 'inherit',
  },
);

child.on('close', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }
  process.exit(code ?? 1);
});