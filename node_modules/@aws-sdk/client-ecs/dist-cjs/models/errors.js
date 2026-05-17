"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockedException = exports.TaskSetNotFoundException = exports.ServiceDeploymentNotFoundException = exports.ConflictException = exports.ResourceNotFoundException = exports.ServiceNotActiveException = exports.PlatformTaskDefinitionIncompatibilityException = exports.DaemonNotFoundException = exports.DaemonNotActiveException = exports.PlatformUnknownException = exports.NoUpdateAvailableException = exports.MissingVersionException = exports.AttributeLimitExceededException = exports.ServiceNotFoundException = exports.TargetNotFoundException = exports.ResourceInUseException = exports.TargetNotConnectedException = exports.ClusterContainsTasksException = exports.ClusterContainsServicesException = exports.ClusterContainsContainerInstancesException = exports.ClusterContainsCapacityProviderException = exports.NamespaceNotFoundException = exports.UpdateInProgressException = exports.UnsupportedFeatureException = exports.ServerException = exports.LimitExceededException = exports.InvalidParameterException = exports.ClusterNotFoundException = exports.ClientException = exports.AccessDeniedException = void 0;
const ECSServiceException_1 = require("./ECSServiceException");
class AccessDeniedException extends ECSServiceException_1.ECSServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
exports.AccessDeniedException = AccessDeniedException;
class ClientException extends ECSServiceException_1.ECSServiceException {
    name = "ClientException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClientException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClientException.prototype);
    }
}
exports.ClientException = ClientException;
class ClusterNotFoundException extends ECSServiceException_1.ECSServiceException {
    name = "ClusterNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterNotFoundException.prototype);
    }
}
exports.ClusterNotFoundException = ClusterNotFoundException;
class InvalidParameterException extends ECSServiceException_1.ECSServiceException {
    name = "InvalidParameterException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
exports.InvalidParameterException = InvalidParameterException;
class LimitExceededException extends ECSServiceException_1.ECSServiceException {
    name = "LimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class ServerException extends ECSServiceException_1.ECSServiceException {
    name = "ServerException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "ServerException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ServerException.prototype);
    }
}
exports.ServerException = ServerException;
class UnsupportedFeatureException extends ECSServiceException_1.ECSServiceException {
    name = "UnsupportedFeatureException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UnsupportedFeatureException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UnsupportedFeatureException.prototype);
    }
}
exports.UnsupportedFeatureException = UnsupportedFeatureException;
class UpdateInProgressException extends ECSServiceException_1.ECSServiceException {
    name = "UpdateInProgressException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "UpdateInProgressException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, UpdateInProgressException.prototype);
    }
}
exports.UpdateInProgressException = UpdateInProgressException;
class NamespaceNotFoundException extends ECSServiceException_1.ECSServiceException {
    name = "NamespaceNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NamespaceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NamespaceNotFoundException.prototype);
    }
}
exports.NamespaceNotFoundException = NamespaceNotFoundException;
class ClusterContainsCapacityProviderException extends ECSServiceException_1.ECSServiceException {
    name = "ClusterContainsCapacityProviderException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterContainsCapacityProviderException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterContainsCapacityProviderException.prototype);
    }
}
exports.ClusterContainsCapacityProviderException = ClusterContainsCapacityProviderException;
class ClusterContainsContainerInstancesException extends ECSServiceException_1.ECSServiceException {
    name = "ClusterContainsContainerInstancesException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterContainsContainerInstancesException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterContainsContainerInstancesException.prototype);
    }
}
exports.ClusterContainsContainerInstancesException = ClusterContainsContainerInstancesException;
class ClusterContainsServicesException extends ECSServiceException_1.ECSServiceException {
    name = "ClusterContainsServicesException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterContainsServicesException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterContainsServicesException.prototype);
    }
}
exports.ClusterContainsServicesException = ClusterContainsServicesException;
class ClusterContainsTasksException extends ECSServiceException_1.ECSServiceException {
    name = "ClusterContainsTasksException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ClusterContainsTasksException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ClusterContainsTasksException.prototype);
    }
}
exports.ClusterContainsTasksException = ClusterContainsTasksException;
class TargetNotConnectedException extends ECSServiceException_1.ECSServiceException {
    name = "TargetNotConnectedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TargetNotConnectedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TargetNotConnectedException.prototype);
    }
}
exports.TargetNotConnectedException = TargetNotConnectedException;
class ResourceInUseException extends ECSServiceException_1.ECSServiceException {
    name = "ResourceInUseException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
    }
}
exports.ResourceInUseException = ResourceInUseException;
class TargetNotFoundException extends ECSServiceException_1.ECSServiceException {
    name = "TargetNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TargetNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TargetNotFoundException.prototype);
    }
}
exports.TargetNotFoundException = TargetNotFoundException;
class ServiceNotFoundException extends ECSServiceException_1.ECSServiceException {
    name = "ServiceNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceNotFoundException.prototype);
    }
}
exports.ServiceNotFoundException = ServiceNotFoundException;
class AttributeLimitExceededException extends ECSServiceException_1.ECSServiceException {
    name = "AttributeLimitExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AttributeLimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AttributeLimitExceededException.prototype);
    }
}
exports.AttributeLimitExceededException = AttributeLimitExceededException;
class MissingVersionException extends ECSServiceException_1.ECSServiceException {
    name = "MissingVersionException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "MissingVersionException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, MissingVersionException.prototype);
    }
}
exports.MissingVersionException = MissingVersionException;
class NoUpdateAvailableException extends ECSServiceException_1.ECSServiceException {
    name = "NoUpdateAvailableException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "NoUpdateAvailableException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NoUpdateAvailableException.prototype);
    }
}
exports.NoUpdateAvailableException = NoUpdateAvailableException;
class PlatformUnknownException extends ECSServiceException_1.ECSServiceException {
    name = "PlatformUnknownException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PlatformUnknownException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PlatformUnknownException.prototype);
    }
}
exports.PlatformUnknownException = PlatformUnknownException;
class DaemonNotActiveException extends ECSServiceException_1.ECSServiceException {
    name = "DaemonNotActiveException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DaemonNotActiveException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DaemonNotActiveException.prototype);
    }
}
exports.DaemonNotActiveException = DaemonNotActiveException;
class DaemonNotFoundException extends ECSServiceException_1.ECSServiceException {
    name = "DaemonNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "DaemonNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, DaemonNotFoundException.prototype);
    }
}
exports.DaemonNotFoundException = DaemonNotFoundException;
class PlatformTaskDefinitionIncompatibilityException extends ECSServiceException_1.ECSServiceException {
    name = "PlatformTaskDefinitionIncompatibilityException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "PlatformTaskDefinitionIncompatibilityException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, PlatformTaskDefinitionIncompatibilityException.prototype);
    }
}
exports.PlatformTaskDefinitionIncompatibilityException = PlatformTaskDefinitionIncompatibilityException;
class ServiceNotActiveException extends ECSServiceException_1.ECSServiceException {
    name = "ServiceNotActiveException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceNotActiveException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceNotActiveException.prototype);
    }
}
exports.ServiceNotActiveException = ServiceNotActiveException;
class ResourceNotFoundException extends ECSServiceException_1.ECSServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ConflictException extends ECSServiceException_1.ECSServiceException {
    name = "ConflictException";
    $fault = "client";
    resourceIds;
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConflictException.prototype);
        this.resourceIds = opts.resourceIds;
    }
}
exports.ConflictException = ConflictException;
class ServiceDeploymentNotFoundException extends ECSServiceException_1.ECSServiceException {
    name = "ServiceDeploymentNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceDeploymentNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceDeploymentNotFoundException.prototype);
    }
}
exports.ServiceDeploymentNotFoundException = ServiceDeploymentNotFoundException;
class TaskSetNotFoundException extends ECSServiceException_1.ECSServiceException {
    name = "TaskSetNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "TaskSetNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, TaskSetNotFoundException.prototype);
    }
}
exports.TaskSetNotFoundException = TaskSetNotFoundException;
class BlockedException extends ECSServiceException_1.ECSServiceException {
    name = "BlockedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "BlockedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, BlockedException.prototype);
    }
}
exports.BlockedException = BlockedException;
