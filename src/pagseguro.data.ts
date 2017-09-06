/**
 * Interface com todos os dados usados a serem enviados para o sistema de Pagamento
 */
export interface PagSeguroData {
    token?: string;
    method?: "creditCard" | "boleto" | "eft";
    sender?: {
        hash?: string;
        ip?: string;
        email?: string;
        name?: string; 
        phone?: {
            areaCode: string;
            number: string;
        }
        documents?: {
            document?: {
                type: string;
                value: string;
            }
        }
    }
    creditCard?: {
        cardNumber?: string;
        cvv?: string;
        expirationMonth?: string;
        expirationYear?: string;
        token?: string;
        holder?: {
            name?: string; 
            documents?: {
                document?: {
                    type: string;
                    value: string;
                }
            }
        },
        billingAddress?: {
            state: string,
            country: string,
            postalCode: string,
            number: string,
            city: string,
            street: string,
            district: string
        }
    }
    bank?: {
        name: string;
    }
    shipping?: {
        addressRequired: true | false | null;
    }
    items?: [{
        item: {
            id: string;
            description: string;
            amount?: number;
            quantity?: number;
        }
    }]

}  