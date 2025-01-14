/**
 * Copyright © 2024 650 Industries.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// `@expo/metro-runtime` MUST be the first import to ensure Fast Refresh works
// on web.
import '@expo/metro-runtime';

import { renderRootComponent } from 'expo-router/build/renderRootComponent';
import { App } from 'expo-router/build/rsc/entry';

// This file should only import and register the root. No components or exports
// should be added here.
renderRootComponent(App);
