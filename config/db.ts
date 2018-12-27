import { connect } from 'mongoose'

connect(
  `mongodb+srv://wri:${
    process.env.PASSWORD
  }@cluster0-jxp3n.mongodb.net/test?retryWrites=true`,
  {
    useNewUrlParser: true
  }
).then(() => console.log('Connected to mongodb'))
