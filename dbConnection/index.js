import mongoose from 'mongoose';

const DB_CONNECTION_URL = 'mongodb+srv://psikocat:psikocat1324@cluster0.fpemlwh.mongodb.net/?retryWrites=true&w=majority';

const connectDB = () => {
  console.log('Connecting to DB...');

  const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  return mongoose.connect(DB_CONNECTION_URL, OPTIONS);
};

export default connectDB;
