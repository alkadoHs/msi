<!DOCTYPE html>
<html>
<head>
    <title>Branch Sales Report</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 13px;
            margin: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: right;
        }
        td:first-child, th:first-child {
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
        h1, h2 {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1> {{ auth()->user()->company->name }}</h1>
    <h2>Balance Sheet</h1>
    <table>
        <thead>
            <tr>
                <th>Branch</th>
                <th>Account</th>
                <th>Balance</th>
                <th>Last Used</th>
            </tr>
        </thead>
        <tbody>
            @if ($accounts->isEmpty())
                <tr>
                    <td colspan="4" style="text-align: center;">No data available for the selected date range.</td>
                </tr>
            @else
                @foreach ($accounts as $account)
                    <tr>
                        <td>{{ $account->branch?->name }}</td>
                        <td>{{$account->paymentMethod?->name }}</td>
                        <td>{{ number_format($account->amount, 2) }}</td>
                        <td>{{ $account->updated_at->diffForHumans() }}</td>
                    </tr>
                @endforeach
            @endif
        </tbody>
    </table>
</body>
</html>
