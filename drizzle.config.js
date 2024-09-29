/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://SkillSharpAIDataBase_owner:UkyTBL8Jd7Pm@ep-yellow-salad-a5wvd3hm.us-east-2.aws.neon.tech/SkillSharpAIDataBase?sslmode=require,'
    }
  };