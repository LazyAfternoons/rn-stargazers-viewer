import {Button, CheckBox, Input} from '@rneui/themed';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {StyleProp, View, ViewStyle} from 'react-native';

/**
 * Type for data passed by the form handler.
 */
export type RepoFormData = {
  /**
   * The owner of the repository.
   */
  owner: string;
  /**
   * The name of the repository.
   */
  repo: string;
  /**
   * True if timestamp (starred at) has to be included, false otherwise.
   */
  withTimestamp: boolean;
};

/**
 * Props for the {@link RepoInputForm}
 */
export type RepoFormProps = {
  /**
   * handler for the submit button.
   */
  handler: (data: RepoFormData) => void;
  /**
   * Optional container style for the outer view.
   */
  containerStyle?: StyleProp<ViewStyle>;
};

/**
 * Form component which accepts an owner and a repository name and calls the handler callback on submit.
 * @remarks
 * Validation is applied to text fields:
 * owner: the value is require and the max lenght is 38.
 * repo: the vaule is required and the max length is 100.
 * Unfortunately there's no official documentation on limits and validation rules of username and repo names.
 * Only lenght is restricted due to being very easy to very by using the web interface.
 */
const RepoInputForm = ({handler, containerStyle}: RepoFormProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors, isValid},
  } = useForm<RepoFormData>({defaultValues: {withTimestamp: false}});
  const {t} = useTranslation();
  const submitLabel = t('form.submit');

  return (
    <View style={containerStyle}>
      <Controller
        control={control}
        rules={{
          required: {value: true, message: t('form.required')},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            autoCapitalize="none"
            label={'Owner'}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCorrect={false}
            maxLength={38}
            errorMessage={errors?.owner?.message}
          />
        )}
        name="owner"
      />

      <Controller
        control={control}
        rules={{
          maxLength: {value: 250, message: t('form.repo_maxlength')},
          required: {value: true, message: t('form.required')},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            autoCapitalize="none"
            label={'Name'}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCorrect={false}
            maxLength={100}
            errorMessage={errors?.repo?.message}
          />
        )}
        name="repo"
      />

      <Controller
        control={control}
        render={({field: {value}}) => (
          <CheckBox
            title={t('form.include_ts') || ''} //always returns something, fallsback to form.include_ts
            checked={value}
            onPress={() => setValue('withTimestamp', !value)}
          />
        )}
        name="withTimestamp"
      />
      <Button
        disabled={!isValid}
        title={submitLabel}
        onPress={handleSubmit(handler)}
      />
    </View>
  );
};

export default RepoInputForm;
