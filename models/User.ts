import { InferSchemaType, model, models, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      minLength: [4, 'Username should be 4 characters or more'],
      maxLength: [30, 'Username should be less than 30 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Invalid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      min: [8, 'Password must be at least 8 characters long.'],
      select: false,
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
    },
  },
  {
    timestamps: true,
  }
)

type UserModel = InferSchemaType<typeof UserSchema>

const User = models.User || model<UserModel>('User', UserSchema)

export default User
