import { IPeriod } from '../core/IPeriod';

export interface IConvocatory {
    id: number;
    id_period: IPeriod;
    start_date: Date;
    end_date: Date;
    is_active: boolean;
}