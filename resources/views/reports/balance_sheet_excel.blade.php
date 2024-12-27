
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
                    <td>{{ $account->paymentMethod?->name }}</td>
                    <td>{{ number_format($account->amount, 2) }}</td>
                    <td>{{ $account->updated_at->diffForHumans() }}</td>
                </tr>
            @endforeach
        @endif
    </tbody>
</table>

