
var container = document.getElementById('jsoneditor');

var schema1 = {
    "title": "Pagadurias",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "array",
    "items": {
        "properties": {
            "id": {
                "type": "string",
                "description": "Unico identificador de Pagaduría"
            },
            "name": {
                "type": "string"
            },
            "status": {
                "type": "string",
                "enum": ["ACTIVE", "INACTIVE"]
            },
            "email" : {
                "type": "string",
                "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
            },
            "identification": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "enum": ["RUT", "RUC"]
                    },
                    "document": {
                        "type": "string"
                    }
                }
            },
            "metadata": {
                "type": "object"
            },
            "channels": {
                "type": "array",
                "items": {
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        },
                        "metadata": {
                            "type": "object"
                        },
                        "profiles": {
                            "type": "array",
                            "items": {
                                "properties": {
                                    "id": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "contracts": {
                                        "type": "array",
                                        "items": {
                                            "properties": {
                                                "id": {
                                                    "type": "string"
                                                },
                                                "type": {
                                                    "type": "string"
                                                },
                                                "name": {
                                                    "type": "string"
                                                },
                                                "conditions": {
                                                    "type": "array",
                                                    "items": {
                                                        "properties": {
                                                            "antiquity": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "type": {
                                                                        "type": "string"
                                                                    },
                                                                    "min": {
                                                                        "type": "integer"
                                                                    },
                                                                    "max": {
                                                                        "type": "integer"
                                                                    }
                                                                }
                                                            },
                                                            "installments": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "min": {
                                                                        "type": "integer"
                                                                    },
                                                                    "max": {
                                                                        "type": "integer"
                                                                    }
                                                                }
                                                            },
                                                            "amount": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "min": {
                                                                        "type": "integer"
                                                                    },
                                                                    "max": {
                                                                        "type": "integer"
                                                                    }
                                                                }
                                                            },
                                                            "documents": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "requested": {
                                                                        "type": "array",
                                                                        "items": {
                                                                            "properties": {
                                                                                "id": {
                                                                                    "type": "string"
                                                                                },
                                                                                "name": {
                                                                                    "type": "string"
                                                                                },
                                                                                "quantity": {
                                                                                    "type": "integer"
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "generated": {
                                                                        "type": "array",
                                                                        "items": {
                                                                            "properties": {
                                                                                "id": {
                                                                                    "type": "string"
                                                                                },
                                                                                "name": {
                                                                                    "type": "string"
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            "metadata": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "id": {
                                                                        "type": "integer"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "metadata": {
                                                    "type": "object"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "required": ["id", "name", "identification"],

        "additionalProperties": false
    }
};

var schema2 = {
    "title": "Pagaduria",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Unico identificador de Pagaduría"
        },
        "name": {
            "type": "string"
        },
        "status": {
            "type": "string",
            "enum": [
                "ACTIVE",
                "INACTIVE"
            ]
        },
        "email": {
            "type": "string",
            "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
        },
        "identification": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "RUT",
                        "RUC"
                    ]
                },
                "document": {
                    "type": "string"
                }
            }
        },
        "metadata": {
            "type": "object"
        },
        "channels": {
            "type": "array",
            "items": {
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "metadata": {
                        "type": "object"
                    },
                    "profiles": {
                        "type": "array",
                        "items": {
                            "properties": {
                                "id": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "contracts": {
                                    "type": "array",
                                    "items": {
                                        "properties": {
                                            "id": {
                                                "type": "string"
                                            },
                                            "type": {
                                                "type": "string"
                                            },
                                            "name": {
                                                "type": "string"
                                            },
                                            "conditions": {
                                                "type": "array",
                                                "items": {
                                                    "properties": {
                                                        "antiquity": {
                                                            "type": "object",
                                                            "properties": {
                                                                "type": {
                                                                    "type": "string"
                                                                },
                                                                "min": {
                                                                    "type": "integer"
                                                                },
                                                                "max": {
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        },
                                                        "installments": {
                                                            "type": "object",
                                                            "properties": {
                                                                "min": {
                                                                    "type": "integer"
                                                                },
                                                                "max": {
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        },
                                                        "amount": {
                                                            "type": "object",
                                                            "properties": {
                                                                "min": {
                                                                    "type": "integer"
                                                                },
                                                                "max": {
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        },
                                                        "documents": {
                                                            "type": "object",
                                                            "properties": {
                                                                "requested": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "properties": {
                                                                            "id": {
                                                                                "type": "string"
                                                                            },
                                                                            "name": {
                                                                                "type": "string"
                                                                            },
                                                                            "quantity": {
                                                                                "type": "integer"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                "generated": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "properties": {
                                                                            "id": {
                                                                                "type": "string"
                                                                            },
                                                                            "name": {
                                                                                "type": "string"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "metadata": {
                                                            "type": "object",
                                                            "properties": {
                                                                "id": {
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "metadata": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "required": [
        "id",
        "name",
        "identification"
    ],
    "additionalProperties": false
};

var schema = {
    "title": "Pagaduria",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "_id": {
            "type": "string"
        },
        "id": {
            "type": "string",
            "description": "Unico identificador de Pagaduría"
        },
        "name": {
            "type": "string"
        },
        "status": {
            "type": "string",
            "enum": [
                "ACTIVE",
                "INACTIVE"
            ]
        },
        "email": {
            "type": "string",
            "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
        },
        "identification": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string",
                    "enum": [
                        "RUT",
                        "RUC"
                    ]
                },
                "document": {
                    "type": "string"
                }
            }
        },
        "expireDate" :{
            "type" : "string"
        },
        "code" :{
            "type" : "string"
        },
        "abbr" :{
            "type" : "string"
        },
        "metadata": {
            "type": "object"
        },
        "channels": {
            "type": "array",
            "items": {
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "metadata": {
                        "type": "object"
                    },
                    "profiles": {
                        "type": "array",
                        "items": {
                            "properties": {
                                "id": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "contracts": {
                                    "type": "array",
                                    "items": {
                                        "properties": {
                                            "id": {
                                                "type": "string"
                                            },
                                            "type": {
                                                "type": "string"
                                            },
                                            "name": {
                                                "type": "string"
                                            },
                                            "conditions": {
                                                "type": "array",
                                                "items": {
                                                    "properties": {
                                                        "antiquity": {
                                                            "type": "object",
                                                            "properties": {
                                                                "type": {
                                                                    "type": "string"
                                                                },
                                                                "min": {
                                                                    "type": "integer"
                                                                },
                                                                "max": {
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        },
                                                        "installments": {
                                                            "type": "object",
                                                            "properties": {
                                                                "min": {
                                                                    "type": "integer"
                                                                },
                                                                "max": {
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        },
                                                        "amount": {
                                                            "type": "object",
                                                            "properties": {
                                                                "min": {
                                                                    "type": "integer"
                                                                },
                                                                "max": {
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        },
                                                        "documents": {
                                                            "type": "object",
                                                            "properties": {
                                                                "requested": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "properties": {
                                                                            "id": {
                                                                                "type": "string"
                                                                            },
                                                                            "name": {
                                                                                "type": "string"
                                                                            },
                                                                            "quantity": {
                                                                                "type": "integer"
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                "generated": {
                                                                    "type": "array",
                                                                    "items": {
                                                                        "properties": {
                                                                            "id": {
                                                                                "type": "string"
                                                                            },
                                                                            "name": {
                                                                                "type": "string"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "metadata": {
                                                            "type": "object",
                                                            "properties": {
                                                                "id": {
                                                                    "type": "integer"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "metadata": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "required": [
        "id",
        "name"
    ],
    "additionalProperties": false
};


//var schema = {};

var options = {
    mode: 'tree',
    //modes: ['code', 'form', 'text', 'tree', 'view', 'preview'], // allowed modes
    modes: ['form', 'tree', 'view'], // allowed modes
    onError: function (err) {
        console.error(err);
    },
    onChange: function (err) {
        if (err)
            console.error(err);
        else {
            noError = true;
            console.error("No error-onchange");
        }

    },


    onValidate: function (json) {
        var errors = [];
       // alert("validation");
        //console.log("No Errors");


        if (json && json.customer && !json.customer.address) {
            errors.push({
                path: ['customer'],
                message: 'Required property "address" missing.'
            });
        }


        return errors;
    },


    onValidationError: function (errors) {
        errors.forEach((error) => {
            switch (error.type) {
                case 'validation': // schema validation error
                    noError = false;
                    console.log(error.error.message);
                    break;
                case 'customValidation': // custom validation error
                    alert("customvalidation");
                    break;
                case 'error':  // json parse error
                    alert("error");
                    break;

            }
        });
     },
    schema: schema
};

var json1 = [
    {
        "id": "1",
        "name": "PAGADURIA 1",
        "email": "contacto@pagaduria1.com",
        "status": "ACTIVE",
        "identification": {
            "type": "RUT",
            "document": "1135121-5"
        },
        "metadata": {},
        "channels": [
            {
                "id": "DEFAULT",
                "name": "Canal por defecto",
                "metadata": {},
                "profiles": [
                    {
                        "id": "NOMINA",
                        "name": "Perfil nomina",
                        "contracts": [
                            {
                                "id": "1",
                                "type": "INDEFINIDO",
                                "name": "Contrato indefinido 1",
                                "conditions": [
                                    {
                                        "antiquity": {
                                            "type": "ANTIQUITY",
                                            "min": 90,
                                            "max": 9999
                                        },
                                        "installments": {
                                            "min": 12,
                                            "max": 120
                                        },
                                        "amount": {
                                            "min": 2000000,
                                            "max": 60000000
                                        },
                                        "documents": {
                                            "requested": [
                                                {
                                                    "id": "ID_DOC",
                                                    "name": "Documento de identidad",
                                                    "quantity": 1
                                                },
                                                {
                                                    "id": "PAYMENT_RECEIPT",
                                                    "name": "Desprendible de pago",
                                                    "quantity": 3
                                                },
                                                {
                                                    "id": "WORKING_LETTER",
                                                    "name": "Carta Laboral",
                                                    "quantity": 1
                                                }
                                            ],
                                            "generated": [
                                                {
                                                    "id": "CASE1",
                                                    "name": "Documento pagare"
                                                }
                                            ]
                                        },
                                        "metadata": {}
                                    }
                                ],
                                "metadata": {}
                            },
                            {
                                "id": "2",
                                "type": "SERVICIOS",
                                "name": "Contrato Servicios",
                                "conditions": [
                                    {
                                        "antiquity": {
                                            "type": "ANTIQUITY",
                                            "min": 0,
                                            "max": 90
                                        },
                                        "installments": {
                                            "min": 12,
                                            "max": 24
                                        },
                                        "amount": {
                                            "min": 2000000,
                                            "max": 6000000
                                        },
                                        "documents": {
                                            "requested": [
                                                {
                                                    "id": "ID_DOC",
                                                    "name": "Documento de identidad",
                                                    "quantity": 1
                                                },
                                                {
                                                    "id": "PAYMENT_RECEIPT",
                                                    "name": "Desprendible de pago",
                                                    "quantity": 3
                                                },
                                                {
                                                    "id": "WORKING_LETTER",
                                                    "name": "Carta Laboral",
                                                    "quantity": 1
                                                }
                                            ],
                                            "generated": [
                                                {
                                                    "id": "CASE1",
                                                    "name": "Documento pagare"
                                                }
                                            ]
                                        },
                                        "metadata": {}
                                    }
                                ],
                                "metadata": {}
                            }
                        ],
                        "metadata": {}
                    },
                    {
                        "id": "PENSION",
                        "name": "Perfil pensionado",
                        "contracts": [
                            {
                                "id": "1",
                                "type": "PENSION",
                                "name": "Contrato pensionado",
                                "conditions": [
                                    {
                                        "antiquity": {
                                            "type": "AGE",
                                            "min": 90,
                                            "max": 9999
                                        },
                                        "installments": {
                                            "min": 12,
                                            "max": 48
                                        },
                                        "amount": {
                                            "min": 2000000,
                                            "max": 30000000
                                        },
                                        "documents": {
                                            "requested": [
                                                {
                                                    "id": "ID_DOC",
                                                    "name": "Documento de identidad",
                                                    "quantity": 1
                                                },
                                                {
                                                    "id": "PENSION_LETTER",
                                                    "name": "Documento de pensiones",
                                                    "quantity": 1
                                                }
                                            ],
                                            "generated": [
                                                {
                                                    "id": "CASE1",
                                                    "name": "Documento pagare"
                                                }
                                            ]
                                        },
                                        "metadata": {}
                                    }
                                ],
                                "metadata": {}
                            }
                        ],
                        "metadata": {}
                    }
                ]
            }
        ]
    },
    {
        "id": "2",
        "name": "PAGADURIA 2",
        "email": "contacto1@pagaduria1.com",
        "status": "INACTIVO",
        "identification": {
            "type": "RUT",
            "document": "1135121-6"
        }
    }
];
var json2 = {
    "id": "1",
    "name": "PAGADURIA 1",
    "email": "contacto@pagaduria1.com",
    "status": "ACTIVE",
    "identification": {
        "type": "RUT",
        "document": "1135121-5"
    },
    "metadata": {},
    "channels": [
        {
            "id": "DEFAULT",
            "name": "Canal por defecto",
            "metadata": {},
            "profiles": [
                {
                    "id": "NOMINA",
                    "name": "Perfil nomina",
                    "contracts": [
                        {
                            "id": "1",
                            "type": "INDEFINIDO",
                            "name": "Contrato indefinido 1",
                            "conditions": [
                                {
                                    "antiquity": {
                                        "type": "ANTIQUITY",
                                        "min": 90,
                                        "max": 9999
                                    },
                                    "installments": {
                                        "min": 12,
                                        "max": 120
                                    },
                                    "amount": {
                                        "min": 2000000,
                                        "max": 60000000
                                    },
                                    "documents": {
                                        "requested": [
                                            {
                                                "id": "ID_DOC",
                                                "name": "Documento de identidad",
                                                "quantity": 1
                                            },
                                            {
                                                "id": "PAYMENT_RECEIPT",
                                                "name": "Desprendible de pago",
                                                "quantity": 3
                                            },
                                            {
                                                "id": "WORKING_LETTER",
                                                "name": "Carta Laboral",
                                                "quantity": 1
                                            }
                                        ],
                                        "generated": [
                                            {
                                                "id": "CASE1",
                                                "name": "Documento pagare"
                                            }
                                        ]
                                    },
                                    "metadata": {}
                                }
                            ],
                            "metadata": {}
                        },
                        {
                            "id": "2",
                            "type": "SERVICIOS",
                            "name": "Contrato Servicios",
                            "conditions": [
                                {
                                    "antiquity": {
                                        "type": "ANTIQUITY",
                                        "min": 0,
                                        "max": 90
                                    },
                                    "installments": {
                                        "min": 12,
                                        "max": 24
                                    },
                                    "amount": {
                                        "min": 2000000,
                                        "max": 6000000
                                    },
                                    "documents": {
                                        "requested": [
                                            {
                                                "id": "ID_DOC",
                                                "name": "Documento de identidad",
                                                "quantity": 1
                                            },
                                            {
                                                "id": "PAYMENT_RECEIPT",
                                                "name": "Desprendible de pago",
                                                "quantity": 3
                                            },
                                            {
                                                "id": "WORKING_LETTER",
                                                "name": "Carta Laboral",
                                                "quantity": 1
                                            }
                                        ],
                                        "generated": [
                                            {
                                                "id": "CASE1",
                                                "name": "Documento pagare"
                                            }
                                        ]
                                    },
                                    "metadata": {}
                                }
                            ],
                            "metadata": {}
                        }
                    ],
                    "metadata": {}
                },
                {
                    "id": "PENSION",
                    "name": "Perfil pensionado",
                    "contracts": [
                        {
                            "id": "1",
                            "type": "PENSION",
                            "name": "Contrato pensionado",
                            "conditions": [
                                {
                                    "antiquity": {
                                        "type": "AGE",
                                        "min": 90,
                                        "max": 9999
                                    },
                                    "installments": {
                                        "min": 12,
                                        "max": 48
                                    },
                                    "amount": {
                                        "min": 2000000,
                                        "max": 30000000
                                    },
                                    "documents": {
                                        "requested": [
                                            {
                                                "id": "ID_DOC",
                                                "name": "Documento de identidad",
                                                "quantity": 1
                                            },
                                            {
                                                "id": "PENSION_LETTER",
                                                "name": "Documento de pensiones",
                                                "quantity": 1
                                            }
                                        ],
                                        "generated": [
                                            {
                                                "id": "CASE1",
                                                "name": "Documento pagare"
                                            }
                                        ]
                                    },
                                    "metadata": {}
                                }
                            ],
                            "metadata": {}
                        }
                    ],
                    "metadata": {}
                }
            ]
        }
    ]
};
var json = {};


var noError = true;


var editor = new JSONEditor(container, options, json);

console.log('json', json);
console.log('schema', schema);


