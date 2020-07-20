## Deno App

## Features
- REST Architecture
- Creating and managing survey/question topics

## Installation
- Make sure that you have [deno](https://deno.land/#installation) installed on your computer

- Create file to check the integrity of modules imported

    ```dotenv
    deno cache --lock-write --lock=lock.json --unstable server.ts
    ```

## Usage
- Run the application by executing

    ```dotenv
    denon run --allow-net --allow-write --allow-read --allow-env --allow-plugin --unstable server.ts
    ```
