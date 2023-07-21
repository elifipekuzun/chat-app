import React from 'react';
import {Modal, Card, Button} from 'react-native-paper';
import InputField from '../input/input-field';
import {groupName_validation} from '../../../utils/input-helpers/input-validations';
import {FormProvider, useForm} from 'react-hook-form';
import socket from '../../../utils/socket';

const ModalComponent: React.FC<{
  visible: boolean;
  onCancelPress: () => void;
}> = ({visible, onCancelPress}) => {
  const methods = useForm();

  const cancelHandler = () => {
    methods.reset(() => {
      onCancelPress();
    });
  };

  const submitHandler = methods.handleSubmit(data => {
    socket.emit('createRoom', data.groupname);
    methods.reset();
    onCancelPress();
  });

  return (
    <Modal visible={visible} onDismiss={cancelHandler}>
      <FormProvider {...methods}>
        <Card>
          <Card.Content>
            <InputField {...groupName_validation} />
          </Card.Content>
          <Card.Actions>
            <Button onPress={cancelHandler}>Cancel</Button>
            <Button onPress={submitHandler}>Create</Button>
          </Card.Actions>
        </Card>
      </FormProvider>
    </Modal>
  );
};

export default ModalComponent;
