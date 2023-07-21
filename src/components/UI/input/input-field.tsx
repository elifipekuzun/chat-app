import React from 'react';
import {Text, TextInput} from 'react-native-paper';
import {Controller, useFormContext} from 'react-hook-form';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ValidType,
  InputType,
} from '../../../utils/input-helpers/input-validations';
import {
  findInputErrors,
  isFormInvalid,
} from '../../../utils/input-helpers/error-helpers';
import {styles} from './assets/styles';

const InputField: React.FC<{
  name: string;
  label: string;
  type: string;
  validation: ValidType;
}> = ({name, label, type, validation}) => {
  const {
    register,
    control,
    formState: {errors},
  } = useFormContext();
  const [isPrivate, setIsPrivate] = React.useState(type === InputType.password);
  const inputErrors = findInputErrors(errors, name) as {error?: any};
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <View>
          <TextInput
            style={styles.marginVertical6}
            autoCapitalize="none"
            autoCorrect={false}
            label={label}
            value={value}
            activeOutlineColor={isInvalid ? 'red' : 'gray'}
            onChangeText={text => onChange(text)}
            mode="outlined"
            right={
              type === InputType.password ? (
                <TextInput.Icon
                  icon={isPrivate ? 'eye' : 'eye-off'}
                  onPress={() => setIsPrivate(!isPrivate)}
                />
              ) : null
            }
            {...register(name, validation)}
          />
          {isInvalid && <InputError message={inputErrors.error.message} />}
        </View>
      )}
      rules={validation}
      defaultValue={''}
    />
  );
};

const InputError: React.FC<{message: string}> = ({message}) => {
  return (
    <View style={[styles.alertContainer, styles.marginVertical6]}>
      <Icon name="alert-circle-outline" size={24} color={'red'} />
      <Text>{message}</Text>
    </View>
  );
};

export default InputField;
