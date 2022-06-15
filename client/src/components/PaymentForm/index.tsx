import { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'
import { Session } from 'next-auth/client'
import { createPaymentIntent } from 'utils/stripe/methods'
import { FormLoading } from 'components/Form'
import { useRouter } from 'next/router'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (freeGames) {
      // salva no banco
      // redireciona para success
      return push('/success')
    }

    // se for freeGames
    // salva no banco
    // redireciona para success

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)

      // salvar a compra no banco do Strapi
      // redirectionar para a página de Sucesso

      return push('/success')
    }
  }

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        // bater na API /orders/create-payment-intent
        const data = await createPaymentIntent({
          items,
          token: session.jwt
        })

        // se eu receber freeGames: true => setFreeGames
        // faço o fluxo de jogo gratuito
        if (data.freeGames) {
          setFreeGames(true)
          console.log(data.freeGames)
          return
        }

        // se eu receber um erro
        // setError
        if (data.error) {
          setError(data.error)
        } else {
          setFreeGames(false)
          // senão o paymentIntent foi válido
          // setClientSecret
          setClientSecret(data.client_secret)
          console.log(data.client_secret)
        }
      }
    }

    setPaymentMode()
  }, [items, session])

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Payment
          </Heading>

          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px'
                  }
                }
              }}
              onChange={handleChange}
            />
          )}

          {error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
