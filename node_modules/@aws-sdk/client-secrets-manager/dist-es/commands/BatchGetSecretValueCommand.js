import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetSecretValue$ } from "../schemas/schemas_0";
export { $Command };
export class BatchGetSecretValueCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("secretsmanager", "BatchGetSecretValue", {})
    .n("SecretsManagerClient", "BatchGetSecretValueCommand")
    .sc(BatchGetSecretValue$)
    .build() {
}
