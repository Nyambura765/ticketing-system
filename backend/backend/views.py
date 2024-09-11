# backend/views.py
import json  # Add this import
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .mpesa_utils import lipa_na_mpesa_online

@csrf_exempt
def make_payment(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        phone_number = data.get('phone_number')
        amount = data.get('amount')

        if not phone_number or not amount:
            return JsonResponse({'error': 'Phone number and amount are required'}, status=400)

        response = lipa_na_mpesa_online(phone_number, amount)
        return JsonResponse(response)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
