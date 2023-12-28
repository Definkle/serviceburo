import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

export class MockActivatedRoute {
  paramMap = of(convertToParamMap({}));
}
