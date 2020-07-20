## Deno App

## Features
- REST Architecture
- Creating and managing survey/question topics

## Installation
- Make sure that you have [deno](https://deno.land/#installation) installed on your computer

- Create file to check the integrity of the imported modules by executing

    ```dotenv
    deno cache --lock-write --lock=lock.json --unstable server.ts
    ```
- You can check the integrity of the imported modules by executing

    ```dotenv
    deno cache --reload --lock=lock.json --unstable server.ts
    ```

## Usage
- Run the application by executing

    ```dotenv
    denon run --allow-net --allow-write --allow-read --allow-env --allow-plugin --unstable server.ts
    ```
