import styles from 'styles/Home.module.css';
import dbConnect from '../lib/dbConnect';
import Test from '../model/Test';

export default async function page() {
  // await dbConnect();
  // let docs = await Test.find();
  // if (!docs) return null;
  return (
    <main>
      <h1>Hola mundo!</h1>
      <div>
        {/* {docs.map((test: any) => (
          <div key={test.id}>{test.field}</div>
        ))} */}
      </div>
    </main>
  );
}
