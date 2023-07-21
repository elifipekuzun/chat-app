import * as React from 'react';
import {Button, Card} from 'react-native-paper';
import {useForm, FormProvider} from 'react-hook-form';
import InputField from '../../components/UI/input/input-field';
import {username_validation} from '../../utils/input-helpers/input-validations';
import {useActions} from '../../hooks/useActions';
import {RootScreenParams} from '../../utils/navigation-types';
import {styles} from './assets/styles';

const LoginScreen = ({navigation}: RootScreenParams) => {
  const methods = useForm();
  const {user_auth} = useActions();

  const submitHandler = methods.handleSubmit(data => {
    user_auth(data.username);
    methods.reset();
    navigation.navigate('Chats');
  });
  return (
    <FormProvider {...methods}>
      <Card style={styles.flexGrow}>
        <Card.Content>
          <InputField {...username_validation} />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={submitHandler}>
            Submit
          </Button>
        </Card.Actions>
      </Card>
    </FormProvider>
  );
};

export default LoginScreen;
