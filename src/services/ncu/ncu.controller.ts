import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { NCU } from './entity/ncu.entity';
import { INcuService } from './interface/ncu.service.interface';
import { CreateNcuDto } from './dto/create-ncu.dto';
import { JwtAuthenticationGuard } from '../authentication/authentication.guard.jwt';

@Controller('NcuService')
export class NcuController {
  constructor(
    @Inject('INcuService')
    private readonly ncuService: INcuService,
  ) {}

  @Post('CreateNCU')
  public async createNCU(@Body() ncuDto: CreateNcuDto): Promise<NCU> {
    return await this.ncuService.createNCU(ncuDto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('GetUserProfile/:id')
  public async getUserProfile(@Param('id') ncu_id: number): Promise<NCU> {
    const [baseProfile, education, experience, skill] = await Promise.all([
      this.ncuService.getNcu(ncu_id),
      this.ncuService.getUserEducation(ncu_id),
      this.ncuService.getUserExperience(ncu_id),
      this.ncuService.getUserSkills(ncu_id),
    ]);
    const userProfile = baseProfile;
    userProfile.education = education.education;
    userProfile.experience = experience.experience;
    userProfile.skills = skill.skills;
    return userProfile;
  }
}
