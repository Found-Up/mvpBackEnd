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
import { NCUExperience } from './entity/ncu-experience.entity';
import { NCUEducation } from './entity/ncu-education.entity';
import { NCUSkills } from './entity/ncu-skill.entity';

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
      this.getUserEducation(ncu_id),
      this.getUserExperience(ncu_id),
      this.getUserSkills(ncu_id),
    ]);
    const userProfile = baseProfile;
    userProfile.education = education;
    userProfile.experience = experience;
    userProfile.skills = skill;
    return userProfile;
  }

  @Get('GetExperience/:id')
  public async getUserExperience(
    @Param('id') ncu_id: number,
  ): Promise<NCUExperience[]> {
    const getExperience = await this.ncuService.getUserExperience(ncu_id);
    const experienceList: NCUExperience[] = getExperience[0];
    return experienceList;
  }

  @Get('GetEducation/:id')
  public async getUserEducation(
    @Param('id') ncu_id: number,
  ): Promise<NCUEducation[]> {
    const getEducation = await this.ncuService.getUserEducation(ncu_id);
    const educationList: NCUEducation[] = getEducation[0];
    return educationList;
  }

  @Get('GetSkills/:id')
  public async getUserSkills(
    @Param('id') ncu_id: number,
  ): Promise<NCUSkills[]> {
    const getSkills = await this.ncuService.getUserSkills(ncu_id);
    const skillsList: NCUSkills[] = getSkills[0];
    return skillsList;
  }
}
