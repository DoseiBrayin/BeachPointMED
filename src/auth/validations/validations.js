export const getValidationRules = (getValues) => {
  return {
    name: {
      required: 'Name is required',
      minLength: {
        value: 3,
        message: 'Name must be at least 3 characters'
      },
      maxLength: {
        value: 20,
        message: 'Name cannot exceed 20 characters'
      }
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address'
      }
    },
    password: { required: 'Password is required' },
    confirm_pwd: {
      required: 'Confirm password is required',
      validate: (value) => value === getValues('password') || 'Passwords do not match'
    }
  }
}
