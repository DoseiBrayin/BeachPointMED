export const getValidationRules = (getValues) => {
  return {
    name: {
      required: 'Name is required',
      minLength: {
        value: 3,
        message: 'Name must be at least 3 characters'
      },
      maxLength: {
        value: 30,
        message: 'Name cannot exceed 30 characters'
      }
    },
    ID: {
      required: 'The ID is required',
      minLength: {
        value: 5,
        message: 'The ID must be at least 5 characters'
      },
      maxLength: {
        value: 15,
        message: 'the ID cannot exceed 15 characters'
      }
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address'
      }
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'The password must have at least 8 characters'
      },
      maxLength: {
        value: 15,
        message: 'The password cannot exceed 15 characters'
      }
    },
    confirm_pwd: {
      required: 'Confirm password is required',
      validate: (value) => value === getValues('password') || 'Passwords do not match'
    }
  }
}
