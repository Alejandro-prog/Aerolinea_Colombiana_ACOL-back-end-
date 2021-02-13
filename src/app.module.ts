import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars/cars.entity';
import { CarModule } from './cars/cars.module';
import { Flights } from './flights/flights.entity';
import { FlightsModule } from './flights/flight.module';

  @Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'vuelos',
        entities: [Cars, Flights],
        synchronize: true,
      }),
      CarModule, FlightsModule,
    ],
  })
export class AppModule {}