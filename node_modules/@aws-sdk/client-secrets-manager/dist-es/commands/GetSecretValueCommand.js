import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSecretValue$ } from "../schemas/schemas_0";
export { $Command };
export class GetSecretValueCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("secretsmanager", "GetSecretValue", {})
    .n("SecretsManagerClient", "GetSecretValueCommand")
    .sc(GetSecretValue$)
    .build() {
}
