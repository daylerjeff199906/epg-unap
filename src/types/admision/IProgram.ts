export interface IProgram {
    id:               number;
    type:             string;
    name:             string;
    description:      string;
    duration:         string;
    slots:            number;
    modality:         string;
    credits:          number;
    degree:           string;
    image:            string;
    associated_calls: number[];
}
