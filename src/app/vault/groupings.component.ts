import { Component } from "@angular/core";

import { GroupingsComponent as BaseGroupingsComponent } from "jslib-angular/components/groupings.component";
import { CipherService } from "jslib-common/abstractions/cipher.service";
import { CollectionService } from "jslib-common/abstractions/collection.service";
import { FolderService } from "jslib-common/abstractions/folder.service";
import { OrganizationService } from "jslib-common/abstractions/organization.service";
import { StateService } from "jslib-common/abstractions/state.service";

@Component({
  selector: "app-vault-groupings",
  templateUrl: "groupings.component.html",
})
export class GroupingsComponent extends BaseGroupingsComponent {
  constructor(
    collectionService: CollectionService,
    folderService: FolderService,
    stateService: StateService,
    organizationService: OrganizationService,
    cipherService: CipherService
  ) {
    super(collectionService, folderService, stateService, organizationService, cipherService);
  }
}
