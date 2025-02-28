import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    // Se importa el módulo de Mongoose y se registra el esquema de la colección "Pokemon"
    MongooseModule.forFeature([
      {
        name: Pokemon.name, // Nombre del modelo en la base de datos
        schema: PokemonSchema, // Esquema que define la estructura de los documentos
      },
    ]),
  ],
})
export class PokemonModule {}
