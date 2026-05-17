import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSecretVersionIds$ } from "../schemas/schemas_0";
export { $Command };
export class ListSecretVersionIdsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("secretsmanager", "ListSecretVersionIds", {})
    .n("SecretsManagerClient", "ListSecretVersionIdsCommand")
    .sc(ListSecretVersionIds$)
    .build() {
}
