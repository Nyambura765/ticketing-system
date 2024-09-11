# backend/mpesa_utils.py

import requests
from django.conf import settings
from requests.auth import HTTPBasicAuth

def get_mpesa_token():
    response = requests.get(
        settings.MPESA_TOKEN_URL,
        auth=HTTPBasicAuth(settings.MPESA_CONSUMER_KEY, settings.MPESA_CONSUMER_SECRET)
    )
    response_data = response.json()
    return response_data['access_token']

def lipa_na_mpesa_online(phone_number, amount):
    headers = {
        'Authorization': f'Bearer {get_mpesa_token()}',
        'Content-Type': 'application/json',
    }

    payload = {
        "BusinessShortCode": settings.MPESA_LIPA_NA_MPESA_SHORTCODE,
        "Password": settings.MPESA_PASSKEY,
        "Timestamp": "your_timestamp",  # Use current timestamp
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": phone_number,
        "PartyB": settings.MPESA_LIPA_NA_MPESA_SHORTCODE,
        "PhoneNumber": phone_number,
        "CallBackURL": "your_callback_url",
        "AccountReference": "Test123",
        "TransactionDesc": "Payment for testing"
    }

    response = requests.post(
        settings.MPESA_STK_PUSH_URL,
        json=payload,
        headers=headers
    )
    return response.json()
