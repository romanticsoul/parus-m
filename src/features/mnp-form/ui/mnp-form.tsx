import Form from "next/form"
import { Button, Input } from "@/shared/ui"

export const MnpForm = () => {
  return (
    <div className="bg-secondary grid grid-cols-12 gap-10 rounded-2xl p-12">
      <Form
        action="/mnp"
        formMethod="POST"
        className="col-span-12 md:col-span-6"
      >
        <h4 className="mb-4 text-2xl font-medium">
          Введите номер,
          <br />
          который переносите
        </h4>
        <Input
          name="phone"
          type="tel"
          placeholder="Какой номер переносим"
          className="mb-4 w-full"
          required
        />
        <Button size="lg" className="w-full">
          Продолжить
        </Button>
      </Form>
      <div className="col-span-12 md:col-span-6">
        <h4 className="mb-4 text-xl">Перенести номер — просто и бесплатно</h4>
        <ol className="list-decimal pl-6">
          <li className="mb-2">
            <strong>Введите ваш номер</strong>
            <p>Это нужно, чтобы проверить, можно ли его перенести</p>
          </li>
          <li className="mb-2">
            <strong>Оформите сим-карту</strong>
            <p>
              Заберите в офисе Сбера, закажите доставку курьером или оформите
              eSIM
            </p>
          </li>
          <li>
            <strong>Пользуйтесь прежним номером</strong>
            <p>
              Перенос займёт минимум 8 дней, но вы останетесь на связи. Пришлём
              смс, когда всё будет готово
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}
