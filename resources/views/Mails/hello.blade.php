<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail To</title>
</head>
<body>
    <h2>Hello {{ auth()->user()?->name }}</h2>
    <p>Your secret passsword is <b>9876545</b> </p>
</body>
</html>