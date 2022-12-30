import Test from '../models/Test';

export default async function page() {
  let docs = await Test.find();
  if (!docs) return null;
  return (
    <main>
      <h1>Hola mundo!</h1>
      <div>
        {docs.map((test: any) => (
          <div key={test._id}>{test.field}</div>
        ))}
      </div>
    </main>
  );
}
