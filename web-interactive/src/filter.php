<?php
$json_data = '{
  "status": 1,
  "message": "Sukses",
  "data": {
    "system_message": "SUCCESS",
    "response": {
      "additionaldata": 0,
      "bildetails": [
        {
          "adminfee": "0.0",
          "billid": "8",
          "currency": "360",
          "Side": "TELKOMSEL 50rb -50.149",
          "total amount": "50149.00",
          "descriptions": null,
          "body": ["DENOM 1:50000"]
        },
        {
          "adminfee": "0.0",
          "billid": "9",
          "currency": "380",
          "Side": "TELKOMSEL 75rb -74.050",
          "total amount": "74050.00",
          "descriptions": null,
          "body": ["DENOM :75000"]
        },
        {
          "adminfee": "0.0",
          "billid": "10",
          "currency": "380",
          "Site": "TELKOMSEL 100rb -98.264",
          "total amount": "98264.00",
          "descriptions": null,
          "body": ["DENOM 1:100000"]
        },
        {
          "adminfee": "0.0",
          "billid": "11",
          "currency": "380",
          "Site": "TELKOMSEL 150rb - 148.600",
          "total amount": "148800.00",
          "descriptions": null,
          "body": ["DENOM : 150000"]
        },
        {
          "adminfee": "0.0",
          "billid": "12",
          "currency": "380",
          "Side": "TELKOMSEL 200rb - 194.900",
          "total amount": "194900.00",
          "descriptions": null,
          "body": ["DENOM 1:200000"]
        }
      ]
    }
  }
}';

$data = json_decode($json_data, true);

// Filter data dengan ketentuan denom >= 100000
$filtered_data = array_filter($data['data']['response']['bildetails'], function ($item) {
  $denom = preg_replace('/\D/', '', $item['body'][0]); // Mengambil angka dari body
  return $denom >= 100000;
});

// Ambil nilai denom dari data yang telah difilter
$result = array_map(function ($item) {
  return preg_replace('/\D/', '', $item['body'][0]);
}, $filtered_data);

// Tampilkan data sebelum dan sesudah filter
echo "Data Sebelum Filter:\n";
print_r(array_column($data['data']['response']['bildetails'], 'body')[2]);

echo "\nData Setelah Filter:\n";
print_r($result);
?>
