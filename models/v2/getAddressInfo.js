exports.models = {
    "addressInfoResponse": {
        "id": "addressInfoResponse",
        "required": ["address", "utxos"],
        "properties": {
            "address": {
                "type": "string",
                "description": "Array of fee itmes and locking items"
            },
            "utxos": {
                "type": "array",
                "items": {
                    "$ref": "daUtxo"
                },
                "description": "Name of the category"
            }
        }
    }
}