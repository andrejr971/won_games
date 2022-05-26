import Button from 'components/Button';
import Heading from 'components/Heading';
import TextField from 'components/TextField';

import { Form } from './styles';

export default function FormProfile() {
  return (
    <>
      <Heading lineBottom lineColor="primary" color="black" size="small">
        My profile
      </Heading>

      <Form>
        <TextField
          name="name"
          placeholder="Nome"
          label="Name"
          initialValue="John Cage"
        />
        <TextField
          name="email"
          placeholder="E-mail"
          label="E-mail"
          type="email"
          initialValue="johncage@gmail.com"
          disabled
        />
        <TextField
          name="password"
          placeholder="Type your password"
          label="Password"
          type="password"
        />
        <TextField
          name="new_password"
          placeholder="New password"
          label="New password"
          type="password"
        />

        <Button size="large">Save</Button>
      </Form>
    </>
  );
}
