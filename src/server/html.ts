export const homepage = (body: string): string => `
    <!doctype html>
    <html lang="en-GB">

        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        </head>

        <body>
            ${body}
            <script src="/browser.js"></script>
        </body>

    </html>
`;