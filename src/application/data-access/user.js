export default function makeUserDb({ makeDb }) {
  return Object.freeze({
    create,
    findAll,
    findByHash,
  });

  async function findAll() {
    const db = makeDb();
  }

  async function create() {
    const db = makeDb();
  }

  async function findByHash(hash) {
    const db = makeDb();
    try {
      const result = await db.raw(`SELECT id
                                   from users
                                   WHERE hash = ${hash}`);
      return result;
    } catch (err) {
      console.log(`makeUserDb -> fundByHash :: `, JSON.stringify(err.message));
      console.log(err);
      return false;
    }
  }
}
