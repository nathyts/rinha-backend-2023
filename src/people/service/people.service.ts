import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from '../dto/create-person.dto';
import { UpdatePersonDto } from '../dto/update-person.dto';
import { PeopleRepository } from '../repository/people.repository';

@Injectable()
export class PeopleService {
  constructor(private readonly peopleRepository: PeopleRepository) {}

  create = async (createPersonDto: CreatePersonDto) => {
    const user = await this.peopleRepository.create({
      ...createPersonDto,
      stack: createPersonDto.stack ?? [],
    });

    return { id: user.id };
  };

  findAll() {
    return `This action returns all people`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
