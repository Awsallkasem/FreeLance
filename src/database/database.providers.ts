import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/database/models/user.model';
import { Published } from './models/Publish.model';
import { Rank } from './models/rank.model';
import { FreeLance } from './models/freeLance.model';
import { Service } from './models/service.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'free',
        password: 'free',
        database: 'free',
        logging:false
      });

      sequelize.addModels([User, Published,Rank,Service,FreeLance]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
