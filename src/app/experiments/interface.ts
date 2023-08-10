  
  let data = 
  {
    "runs" : [
      {
        "info": {
          "run_uuid": "1c231042563b4d1ea40d1404c02ecbef",
          "experiment_id": "3",
          "run_name": "delicate-sheep-90",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1679537873291,
          "end_time": 1679537873564,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/1c231042563b4d1ea40d1404c02ecbef/artifacts",
          "lifecycle_stage": "active",
          "run_id": "1c231042563b4d1ea40d1404c02ecbef"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1679537873335,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1679537873335,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1679537873335,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1679537873335,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "delicate-sheep-90"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"1c231042563b4d1ea40d1404c02ecbef\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-23 02:17:53.359685\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"b49ef128a2434cbdada5655045ded314\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "d2bbeb2f350b4e858eae3491fc5d365e",
          "experiment_id": "3",
          "run_name": "invincible-swan-844",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1679537872926,
          "end_time": 1679537873259,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/d2bbeb2f350b4e858eae3491fc5d365e/artifacts",
          "lifecycle_stage": "active",
          "run_id": "d2bbeb2f350b4e858eae3491fc5d365e"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1679537872971,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1679537872971,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1679537872971,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1679537872971,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "invincible-swan-844"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"d2bbeb2f350b4e858eae3491fc5d365e\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-23 02:17:52.998283\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"4c0ecf64abc24695b6984b06524319eb\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "19d59854fd3b4d2aadfc0b8da73e3d58",
          "experiment_id": "3",
          "run_name": "sneaky-squid-466",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1679537872620,
          "end_time": 1679537872896,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/19d59854fd3b4d2aadfc0b8da73e3d58/artifacts",
          "lifecycle_stage": "active",
          "run_id": "19d59854fd3b4d2aadfc0b8da73e3d58"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1679537872667,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1679537872667,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1679537872667,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1679537872667,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "sneaky-squid-466"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"19d59854fd3b4d2aadfc0b8da73e3d58\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-23 02:17:52.692199\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"0e5f23704026486d835d6f2fdb5b63fa\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "6d991b8e264b40869438dfee536b3067",
          "experiment_id": "3",
          "run_name": "secretive-mole-542",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1679537872277,
          "end_time": 1679537872587,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/6d991b8e264b40869438dfee536b3067/artifacts",
          "lifecycle_stage": "active",
          "run_id": "6d991b8e264b40869438dfee536b3067"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1679537872320,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1679537872320,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1679537872320,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1679537872320,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "secretive-mole-542"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"6d991b8e264b40869438dfee536b3067\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-23 02:17:52.347533\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"cb30ff779d79476c9c2dbcfeca438039\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "e3ef1b929fc24e00b4fc9d40dec63c67",
          "experiment_id": "3",
          "run_name": "valuable-asp-644",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1679537871872,
          "end_time": 1679537872245,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/e3ef1b929fc24e00b4fc9d40dec63c67/artifacts",
          "lifecycle_stage": "active",
          "run_id": "e3ef1b929fc24e00b4fc9d40dec63c67"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1679537871918,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1679537871918,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1679537871918,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1679537871918,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "valuable-asp-644"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"e3ef1b929fc24e00b4fc9d40dec63c67\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-23 02:17:51.962122\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"3c3c420930d344728c498ac33372d17e\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "b7f9b6dde3c246ceb5e2a69321aa433f",
          "experiment_id": "3",
          "run_name": "capricious-conch-557",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1679537871493,
          "end_time": 1679537871841,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/b7f9b6dde3c246ceb5e2a69321aa433f/artifacts",
          "lifecycle_stage": "active",
          "run_id": "b7f9b6dde3c246ceb5e2a69321aa433f"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1679537871559,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1679537871559,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1679537871559,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1679537871559,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "capricious-conch-557"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"b7f9b6dde3c246ceb5e2a69321aa433f\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-23 02:17:51.586730\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"81cca2d044a14a368c9e8e49ec0b74d8\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "e8403d8ed06743b4acd06e42506fe2c1",
          "experiment_id": "3",
          "run_name": "lyrical-finch-721",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1679537871021,
          "end_time": 1679537871458,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/e8403d8ed06743b4acd06e42506fe2c1/artifacts",
          "lifecycle_stage": "active",
          "run_id": "e8403d8ed06743b4acd06e42506fe2c1"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1679537871173,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1679537871173,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1679537871173,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1679537871173,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "lyrical-finch-721"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"e8403d8ed06743b4acd06e42506fe2c1\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-23 02:17:51.201416\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"0b78c45a5336420e85ba7b3cf13490eb\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "6e77b4bab4474436a65eef9e4c3754cc",
          "experiment_id": "3",
          "run_name": "masked-ray-150",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1679537870560,
          "end_time": 1679537870987,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/6e77b4bab4474436a65eef9e4c3754cc/artifacts",
          "lifecycle_stage": "active",
          "run_id": "6e77b4bab4474436a65eef9e4c3754cc"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1679537870682,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1679537870682,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1679537870682,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1679537870682,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "masked-ray-150"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"6e77b4bab4474436a65eef9e4c3754cc\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-23 02:17:50.736944\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"871714b04a714c10af6a284be466c137\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "0d66fef22a054cd6af9aa42a95f4de34",
          "experiment_id": "3",
          "run_name": "capable-fawn-424",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1679537869925,
          "end_time": 1679537870529,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/0d66fef22a054cd6af9aa42a95f4de34/artifacts",
          "lifecycle_stage": "active",
          "run_id": "0d66fef22a054cd6af9aa42a95f4de34"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1679537870056,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1679537870056,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1679537870056,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1679537870056,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "capable-fawn-424"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"0d66fef22a054cd6af9aa42a95f4de34\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-23 02:17:50.117391\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"4efd6569bfea40d4bbd5ac92e3884cc1\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "6cb49d2c1072427a9b7211ec065ee7a3",
          "experiment_id": "3",
          "run_name": "clean-rat-335",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678949369697,
          "end_time": 1678949369942,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/6cb49d2c1072427a9b7211ec065ee7a3/artifacts",
          "lifecycle_stage": "active",
          "run_id": "6cb49d2c1072427a9b7211ec065ee7a3"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1678949369743,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1678949369743,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1678949369743,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1678949369743,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "clean-rat-335"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"6cb49d2c1072427a9b7211ec065ee7a3\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-16 06:49:29.769729\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"454a53fcf2894c7cad291e8426ef4525\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "638b2cf85e3540bcb01432969197ade2",
          "experiment_id": "3",
          "run_name": "worried-kite-326",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678949369372,
          "end_time": 1678949369666,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/638b2cf85e3540bcb01432969197ade2/artifacts",
          "lifecycle_stage": "active",
          "run_id": "638b2cf85e3540bcb01432969197ade2"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1678949369419,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1678949369419,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1678949369419,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1678949369419,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.runName",
              "value": "worried-kite-326"
            },
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"638b2cf85e3540bcb01432969197ade2\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-16 06:49:29.444926\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"84d58fa286684e248b23e43da953c608\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.note.content",
              "value": "<p>Testing the Notes for the 2.03 deployment made yesterday evening. </p><p>Notes functionality is to change to annotation.</p>"
            },
            {
              "key": "TagTesting",
              "value": "1234"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "e1be4f8722564ea0b5bcb464598f33ff",
          "experiment_id": "3",
          "run_name": "charming-crab-628",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678949368989,
          "end_time": 1678949369338,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/e1be4f8722564ea0b5bcb464598f33ff/artifacts",
          "lifecycle_stage": "active",
          "run_id": "e1be4f8722564ea0b5bcb464598f33ff"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1678949369038,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1678949369038,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1678949369038,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1678949369038,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "charming-crab-628"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"e1be4f8722564ea0b5bcb464598f33ff\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-16 06:49:29.064783\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"30d62e06234c40dcb9dc93a7f8e64e33\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.note.content",
              "value": "<p>Testing notes for second round of testing. V2.3</p>"
            },
            {
              "key": "Round_2_Testing",
              "value": "7032"
            },
            {
              "key": "Round_2Testing",
              "value": ""
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "528fd0ca785f4ace8850898f6cc9028a",
          "experiment_id": "3",
          "run_name": "gaudy-cod-383",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678949368686,
          "end_time": 1678949368957,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/528fd0ca785f4ace8850898f6cc9028a/artifacts",
          "lifecycle_stage": "active",
          "run_id": "528fd0ca785f4ace8850898f6cc9028a"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1678949368739,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1678949368739,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1678949368739,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1678949368739,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "gaudy-cod-383"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"528fd0ca785f4ace8850898f6cc9028a\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-16 06:49:28.770939\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"259633ebe57846bdbf2aa7bd0fa09a34\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "eaf925bae02f4d2b9e377ec6fbdae92f",
          "experiment_id": "3",
          "run_name": "rare-snake-238",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678949368360,
          "end_time": 1678949368655,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/eaf925bae02f4d2b9e377ec6fbdae92f/artifacts",
          "lifecycle_stage": "active",
          "run_id": "eaf925bae02f4d2b9e377ec6fbdae92f"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1678949368413,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1678949368413,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1678949368413,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1678949368413,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "rare-snake-238"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"eaf925bae02f4d2b9e377ec6fbdae92f\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-16 06:49:28.442846\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"eb397462cf0447c790bbb0399a2790fd\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "3de1dedc016444bd8b7167e7f055f716",
          "experiment_id": "3",
          "run_name": "trusting-dog-523",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678949367958,
          "end_time": 1678949368329,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/3de1dedc016444bd8b7167e7f055f716/artifacts",
          "lifecycle_stage": "active",
          "run_id": "3de1dedc016444bd8b7167e7f055f716"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1678949368046,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1678949368046,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1678949368046,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1678949368046,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "trusting-dog-523"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"3de1dedc016444bd8b7167e7f055f716\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-16 06:49:28.074435\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"b1e27c08a28a421fae9bc06a65f354da\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "5d88d8a19c0b4dd8a9193949aac5201e",
          "experiment_id": "3",
          "run_name": "mysterious-rook-376",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678949367669,
          "end_time": 1678949367927,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/5d88d8a19c0b4dd8a9193949aac5201e/artifacts",
          "lifecycle_stage": "active",
          "run_id": "5d88d8a19c0b4dd8a9193949aac5201e"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1678949367718,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1678949367718,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1678949367718,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1678949367718,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "mysterious-rook-376"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"5d88d8a19c0b4dd8a9193949aac5201e\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-16 06:49:27.744908\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"81e043c8cb564022b69fe9b6b383fe87\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "5357b498c4084dddb471e73f7cfb452a",
          "experiment_id": "3",
          "run_name": "bouncy-sow-353",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678949367217,
          "end_time": 1678949367637,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/5357b498c4084dddb471e73f7cfb452a/artifacts",
          "lifecycle_stage": "active",
          "run_id": "5357b498c4084dddb471e73f7cfb452a"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1678949367285,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1678949367285,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1678949367285,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1678949367285,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "bouncy-sow-353"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"5357b498c4084dddb471e73f7cfb452a\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-16 06:49:27.319707\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"2cc77fa402a54500b67e706e2c2bec97\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "44f6c47fd708417da504f247cbecaa99",
          "experiment_id": "3",
          "run_name": "skittish-bat-284",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678949366620,
          "end_time": 1678949367185,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/44f6c47fd708417da504f247cbecaa99/artifacts",
          "lifecycle_stage": "active",
          "run_id": "44f6c47fd708417da504f247cbecaa99"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1678949366694,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1678949366694,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1678949366694,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1678949366694,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "skittish-bat-284"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"44f6c47fd708417da504f247cbecaa99\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-16 06:49:26.728036\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"f011e4851dcd41c6b5958bc0094b3051\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "d399d3e10cd14c5895cb53df2dc09fd2",
          "experiment_id": "3",
          "run_name": "gaudy-bug-872",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678454002936,
          "end_time": 1678454003228,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/d399d3e10cd14c5895cb53df2dc09fd2/artifacts",
          "lifecycle_stage": "active",
          "run_id": "d399d3e10cd14c5895cb53df2dc09fd2"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1678454002974,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1678454002974,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1678454002974,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1678454002974,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"d399d3e10cd14c5895cb53df2dc09fd2\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-10 13:13:22.995050\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"94222b41b6394d16a8b6fbb8bfa51bb9\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "gaudy-bug-872"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "d782fcbb20a64144a464774419df9b63",
          "experiment_id": "3",
          "run_name": "rebellious-sloth-215",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678454002617,
          "end_time": 1678454002909,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/d782fcbb20a64144a464774419df9b63/artifacts",
          "lifecycle_stage": "active",
          "run_id": "d782fcbb20a64144a464774419df9b63"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1678454002654,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1678454002654,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1678454002654,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1678454002654,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "rebellious-sloth-215"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"d782fcbb20a64144a464774419df9b63\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-10 13:13:22.674595\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"dfb10d20074d44229734dda8ed3ec903\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "a0850cde0f624d6f88be2b86ddec5ff9",
          "experiment_id": "3",
          "run_name": "sassy-turtle-557",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678454002330,
          "end_time": 1678454002590,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/a0850cde0f624d6f88be2b86ddec5ff9/artifacts",
          "lifecycle_stage": "active",
          "run_id": "a0850cde0f624d6f88be2b86ddec5ff9"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1678454002365,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1678454002365,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1678454002365,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1678454002365,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "sassy-turtle-557"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"a0850cde0f624d6f88be2b86ddec5ff9\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-10 13:13:22.388164\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"e5c00eb97eb04c8384cb751e1df58ed2\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "d02586522efb4b868fb49f91c9cb86fb",
          "experiment_id": "3",
          "run_name": "flawless-grub-64",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678454001941,
          "end_time": 1678454002303,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/d02586522efb4b868fb49f91c9cb86fb/artifacts",
          "lifecycle_stage": "active",
          "run_id": "d02586522efb4b868fb49f91c9cb86fb"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1678454002010,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1678454002010,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1678454002010,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1678454002010,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "flawless-grub-64"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"d02586522efb4b868fb49f91c9cb86fb\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-10 13:13:22.059652\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"3d43f302fbae48cc9461378fcd381fbe\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "72b0d307f1f341f3a4b17702f1350397",
          "experiment_id": "3",
          "run_name": "abrasive-rook-342",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678454001542,
          "end_time": 1678454001915,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/72b0d307f1f341f3a4b17702f1350397/artifacts",
          "lifecycle_stage": "active",
          "run_id": "72b0d307f1f341f3a4b17702f1350397"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1678454001577,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1678454001577,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1678454001577,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1678454001577,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "abrasive-rook-342"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"72b0d307f1f341f3a4b17702f1350397\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-10 13:13:21.598689\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"ff40667a55e94e70a24cb9d41f25b458\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "a7f069228c14447d90f7d9217e3776b4",
          "experiment_id": "3",
          "run_name": "receptive-lynx-180",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678454001147,
          "end_time": 1678454001515,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/a7f069228c14447d90f7d9217e3776b4/artifacts",
          "lifecycle_stage": "active",
          "run_id": "a7f069228c14447d90f7d9217e3776b4"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1678454001185,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1678454001185,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1678454001185,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1678454001185,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "receptive-lynx-180"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"a7f069228c14447d90f7d9217e3776b4\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-10 13:13:21.227851\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"d52a99f385f84f2eacb3e7ca54bcc019\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "e05c609b24a74af8977e32bda19741a9",
          "experiment_id": "3",
          "run_name": "brawny-turtle-551",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678454000714,
          "end_time": 1678454001118,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/e05c609b24a74af8977e32bda19741a9/artifacts",
          "lifecycle_stage": "active",
          "run_id": "e05c609b24a74af8977e32bda19741a9"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1678454000788,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1678454000788,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1678454000788,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1678454000788,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "brawny-turtle-551"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"e05c609b24a74af8977e32bda19741a9\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-10 13:13:20.810442\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"1a45518b98d04686b9ddd6aaada05433\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "58586a1887ff4d89950533f747d53c52",
          "experiment_id": "3",
          "run_name": "mercurial-calf-40",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678454000174,
          "end_time": 1678454000674,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/58586a1887ff4d89950533f747d53c52/artifacts",
          "lifecycle_stage": "active",
          "run_id": "58586a1887ff4d89950533f747d53c52"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1678454000230,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1678454000230,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1678454000230,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1678454000230,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "mercurial-calf-40"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"58586a1887ff4d89950533f747d53c52\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-10 13:13:20.273721\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"113870abc6b8434abc3e2b87ed797326\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "91e93700f44f4fffbf86a71e1e1623bc",
          "experiment_id": "3",
          "run_name": "funny-wren-758",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1678453999571,
          "end_time": 1678454000139,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/91e93700f44f4fffbf86a71e1e1623bc/artifacts",
          "lifecycle_stage": "active",
          "run_id": "91e93700f44f4fffbf86a71e1e1623bc"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1678453999648,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1678453999648,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1678453999648,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1678453999648,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "funny-wren-758"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"91e93700f44f4fffbf86a71e1e1623bc\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-10 13:13:19.683432\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"909c730acd284042bcdba9cc67ffa76b\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "a997bc3501d44e20979372fe5a919248",
          "experiment_id": "3",
          "run_name": "Test ABCDE",
          "user_id": "ubuntu",
          "status": "RUNNING",
          "start_time": 1677736272787,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/a997bc3501d44e20979372fe5a919248/artifacts",
          "lifecycle_stage": "active",
          "run_id": "a997bc3501d44e20979372fe5a919248"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1677736272818,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1677736272818,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1677736272818,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1677736272818,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "Test ABCDE"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"a997bc3501d44e20979372fe5a919248\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-02 05:51:12.837281\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"601d8e7b235440009c0f768969bd6556\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "8f8d0c8a365d44ec9be5a2be0e3121cd",
          "experiment_id": "3",
          "run_name": "Tesing rename, ",
          "user_id": "ubuntu",
          "status": "RUNNING",
          "start_time": 1677736272466,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/8f8d0c8a365d44ec9be5a2be0e3121cd/artifacts",
          "lifecycle_stage": "active",
          "run_id": "8f8d0c8a365d44ec9be5a2be0e3121cd"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1677736272508,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1677736272508,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1677736272508,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1677736272508,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"8f8d0c8a365d44ec9be5a2be0e3121cd\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-02 05:51:12.525181\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"7d230993f5084295bf1d3ceda4bcf30c\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.runName",
              "value": "Tesing rename, "
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "4d6a9d9860cf422590eddc060d5e01a6",
          "experiment_id": "3",
          "run_name": "legendary-turtle-963",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1677736272198,
          "end_time": 1677736272431,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/4d6a9d9860cf422590eddc060d5e01a6/artifacts",
          "lifecycle_stage": "active",
          "run_id": "4d6a9d9860cf422590eddc060d5e01a6"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1677736272227,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1677736272227,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1677736272227,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1677736272227,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "legendary-turtle-963"
            },
            {
              "key": "mlflow.note.content",
              "value": "<p>Testing the notes. </p>"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"4d6a9d9860cf422590eddc060d5e01a6\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-02 05:51:12.244731\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"782cc7f3ebd94ac2a06d5f16c3c3a3c0\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "Test Notes",
              "value": "234"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "834b9bb697e2408e98691feebe95c9a8",
          "experiment_id": "3",
          "run_name": "placid-lynx-146",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1677736271894,
          "end_time": 1677736272173,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/834b9bb697e2408e98691feebe95c9a8/artifacts",
          "lifecycle_stage": "active",
          "run_id": "834b9bb697e2408e98691feebe95c9a8"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1677736271942,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1677736271942,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1677736271942,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1677736271942,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "placid-lynx-146"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"834b9bb697e2408e98691feebe95c9a8\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-02 05:51:11.961919\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"57979b2e46194ea083321a252483ec99\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "53fb4fccb8404037be3962717fa62d5c",
          "experiment_id": "3",
          "run_name": "aged-koi-880",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1677736271634,
          "end_time": 1677736271869,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/53fb4fccb8404037be3962717fa62d5c/artifacts",
          "lifecycle_stage": "active",
          "run_id": "53fb4fccb8404037be3962717fa62d5c"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1677736271665,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1677736271665,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1677736271665,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1677736271665,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "aged-koi-880"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"53fb4fccb8404037be3962717fa62d5c\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-02 05:51:11.681471\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"b3a9e33ffbae495fbc9ff797fdcc1aae\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "1b082f44af46434687cef884850ccdcf",
          "experiment_id": "3",
          "run_name": "nimble-shark-476",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1677736271346,
          "end_time": 1677736271608,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/1b082f44af46434687cef884850ccdcf/artifacts",
          "lifecycle_stage": "active",
          "run_id": "1b082f44af46434687cef884850ccdcf"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1677736271380,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1677736271380,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1677736271380,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1677736271380,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "nimble-shark-476"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"1b082f44af46434687cef884850ccdcf\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-02 05:51:11.400231\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"499982bf034648bba9688935250edee1\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "c393752a7a134df7887bd85ee8b2672f",
          "experiment_id": "3",
          "run_name": "receptive-duck-400",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1677736270887,
          "end_time": 1677736271320,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/c393752a7a134df7887bd85ee8b2672f/artifacts",
          "lifecycle_stage": "active",
          "run_id": "c393752a7a134df7887bd85ee8b2672f"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1677736271005,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1677736271005,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1677736271005,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1677736271005,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "receptive-duck-400"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"c393752a7a134df7887bd85ee8b2672f\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-03-02 05:51:11.036349\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"9ba4f2d96d5c4f94a048903facf42919\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "132da12766f148f9acd7545695ff621f",
          "experiment_id": "3",
          "run_name": "worried-roo-680",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1676902967025,
          "end_time": 1676902967380,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/132da12766f148f9acd7545695ff621f/artifacts",
          "lifecycle_stage": "active",
          "run_id": "132da12766f148f9acd7545695ff621f"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1676902967086,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1676902967086,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1676902967086,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1676902967086,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "worried-roo-680"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"132da12766f148f9acd7545695ff621f\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-20 14:22:47.124677\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"eb319054213f40cdb31299703a76f461\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.note.content",
              "value": "<p>The notes are being tested. </p>"
            },
            {
              "key": "Testing",
              "value": "notes"
            },
            {
              "key": "This error with tags",
              "value": "is occuring again."
            },
            {
              "key": "Add a tag",
              "value": "when the conversion is happening?"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "d9bb1896dada4b92bf205c7237172834",
          "experiment_id": "3",
          "run_name": "fun-crab-746",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1676902966670,
          "end_time": 1676902966979,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/d9bb1896dada4b92bf205c7237172834/artifacts",
          "lifecycle_stage": "active",
          "run_id": "d9bb1896dada4b92bf205c7237172834"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1676902966727,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1676902966727,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1676902966727,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1676902966727,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "fun-crab-746"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"d9bb1896dada4b92bf205c7237172834\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-20 14:22:46.763368\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"c0995f36d315427297e28031f613f7c6\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "49e30fd6039543308d6fdc0c061932ed",
          "experiment_id": "3",
          "run_name": "chill-finch-314",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1676902966309,
          "end_time": 1676902966629,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/49e30fd6039543308d6fdc0c061932ed/artifacts",
          "lifecycle_stage": "active",
          "run_id": "49e30fd6039543308d6fdc0c061932ed"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1676902966363,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1676902966363,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1676902966363,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1676902966363,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "chill-finch-314"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"49e30fd6039543308d6fdc0c061932ed\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-20 14:22:46.403008\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"13017cdabc704699a2ebd381e4c5465d\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "e36cc40ceb064fc9825826fe91eb66d9",
          "experiment_id": "3",
          "run_name": "gentle-perch-251",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1676902965865,
          "end_time": 1676902966262,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/e36cc40ceb064fc9825826fe91eb66d9/artifacts",
          "lifecycle_stage": "active",
          "run_id": "e36cc40ceb064fc9825826fe91eb66d9"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1676902965956,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1676902965956,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1676902965956,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1676902965956,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "gentle-perch-251"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"e36cc40ceb064fc9825826fe91eb66d9\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-20 14:22:46.002801\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"514dddafb05c4c1fa98b6801b6030f1d\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "84f27b122dd74b6790f722724c636ab2",
          "experiment_id": "3",
          "run_name": "skillful-loon-588",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1676902965463,
          "end_time": 1676902965825,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/84f27b122dd74b6790f722724c636ab2/artifacts",
          "lifecycle_stage": "active",
          "run_id": "84f27b122dd74b6790f722724c636ab2"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1676902965532,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1676902965532,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1676902965532,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1676902965532,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "skillful-loon-588"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"84f27b122dd74b6790f722724c636ab2\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-20 14:22:45.562742\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"715860eddef34f4f826ebeae8d9681c2\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "421ccfbf18bb473faad4b07350927421",
          "experiment_id": "3",
          "run_name": "marvelous-whale-357",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1676902964922,
          "end_time": 1676902965412,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/421ccfbf18bb473faad4b07350927421/artifacts",
          "lifecycle_stage": "active",
          "run_id": "421ccfbf18bb473faad4b07350927421"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1676902964986,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1676902964986,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1676902964986,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1676902964986,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "marvelous-whale-357"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"421ccfbf18bb473faad4b07350927421\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-20 14:22:45.112094\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"e2865ba0ed024f61b5b7bb3f32b101d2\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.note.content",
              "value": "<p>Let\u2019s test this notes for V2.1</p>"
            },
            {
              "key": "Testing",
              "value": "1234"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "fc782e5d57c0471198199f054e539bbd",
          "experiment_id": "3",
          "run_name": "ABCDEF",
          "user_id": "ubuntu",
          "status": "RUNNING",
          "start_time": 1676902964461,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/fc782e5d57c0471198199f054e539bbd/artifacts",
          "lifecycle_stage": "active",
          "run_id": "fc782e5d57c0471198199f054e539bbd"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1676902964530,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1676902964530,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1676902964530,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1676902964530,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"fc782e5d57c0471198199f054e539bbd\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-20 14:22:44.565404\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"14e8b6b688254d1ea37d19b50018a862\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.runName",
              "value": "ABCDEF"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "c291fc54294d4a86a39b14cb3bd7a9a6",
          "experiment_id": "3",
          "run_name": "suave-bear-783",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1676902963836,
          "end_time": 1676902964412,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/c291fc54294d4a86a39b14cb3bd7a9a6/artifacts",
          "lifecycle_stage": "active",
          "run_id": "c291fc54294d4a86a39b14cb3bd7a9a6"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1676902963893,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1676902963893,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1676902963893,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1676902963893,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "suave-bear-783"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"c291fc54294d4a86a39b14cb3bd7a9a6\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-20 14:22:43.927358\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"b74cad835d504363aa49498cc247f12b\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "Testing",
              "value": "1234"
            },
            {
              "key": "Test",
              "value": "234"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "be10c2307a8d4d18b7504ecb21bd8595",
          "experiment_id": "3",
          "run_name": "gifted-bass-295",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1676902962964,
          "end_time": 1676902963789,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/be10c2307a8d4d18b7504ecb21bd8595/artifacts",
          "lifecycle_stage": "active",
          "run_id": "be10c2307a8d4d18b7504ecb21bd8595"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1676902963107,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1676902963107,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1676902963107,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1676902963107,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.10/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "gifted-bass-295"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"be10c2307a8d4d18b7504ecb21bd8595\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-20 14:22:43.174936\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.10.9\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"1.1.1\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"770d79b7b96741608276290be847c139\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "ca71c6bcf28a4935ba86e701804243a4",
          "experiment_id": "3",
          "run_name": "capable-rat-120",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1675247864626,
          "end_time": 1675247864973,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/ca71c6bcf28a4935ba86e701804243a4/artifacts",
          "lifecycle_stage": "active",
          "run_id": "ca71c6bcf28a4935ba86e701804243a4"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1675247864669,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1675247864669,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1675247864669,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1675247864669,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"ca71c6bcf28a4935ba86e701804243a4\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-01 10:37:44.692581\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"c24ab3aa6ca44e1ca00fbf1a7a0071f6\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "capable-rat-120"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "1d9aaeafe53c4f558afdfbeaf3297e2a",
          "experiment_id": "3",
          "run_name": "youthful-tern-650",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1675247863920,
          "end_time": 1675247864221,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/1d9aaeafe53c4f558afdfbeaf3297e2a/artifacts",
          "lifecycle_stage": "active",
          "run_id": "1d9aaeafe53c4f558afdfbeaf3297e2a"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1675247863979,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1675247863979,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1675247863979,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1675247863979,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "youthful-tern-650"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"1d9aaeafe53c4f558afdfbeaf3297e2a\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-01 10:37:44.009255\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"67ad0da1ffe14985adc7eeb5e2a666db\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "f14c879707f340839b462a9e9fc60048",
          "experiment_id": "3",
          "run_name": "capable-moose-673",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1675247863436,
          "end_time": 1675247863877,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/f14c879707f340839b462a9e9fc60048/artifacts",
          "lifecycle_stage": "active",
          "run_id": "f14c879707f340839b462a9e9fc60048"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1675247863490,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1675247863490,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1675247863490,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1675247863490,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "capable-moose-673"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"f14c879707f340839b462a9e9fc60048\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-01 10:37:43.517970\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"7a6435de7288494880352565fd107306\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.note.content",
              "value": "<p>Testing the functionality of notes. </p><p>Its 2nd round of testing for V2 Testing. </p>"
            },
            {
              "key": "Create",
              "value": "1234"
            },
            {
              "key": "create",
              "value": "1234"
            },
            {
              "key": "why",
              "value": "not"
            },
            {
              "key": "why ",
              "value": "1234"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "cb5826b09d5a4c0a854ff0bed6d46765",
          "experiment_id": "3",
          "run_name": "receptive-duck-89",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1675247863079,
          "end_time": 1675247863400,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/cb5826b09d5a4c0a854ff0bed6d46765/artifacts",
          "lifecycle_stage": "active",
          "run_id": "cb5826b09d5a4c0a854ff0bed6d46765"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1675247863128,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1675247863128,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1675247863128,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1675247863128,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "receptive-duck-89"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"cb5826b09d5a4c0a854ff0bed6d46765\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-01 10:37:43.157157\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"67e68469e9e84294b0488f4ba5fbd379\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "316ffabaf5854d469a7295741ee58540",
          "experiment_id": "3",
          "run_name": "fortunate-gnu-222",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1675247862668,
          "end_time": 1675247863030,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/316ffabaf5854d469a7295741ee58540/artifacts",
          "lifecycle_stage": "active",
          "run_id": "316ffabaf5854d469a7295741ee58540"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1675247862721,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1675247862721,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1675247862721,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1675247862721,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "fortunate-gnu-222"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"316ffabaf5854d469a7295741ee58540\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-01 10:37:42.747865\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"319bc0a0f59d4bd5afdc32a8cf8e3dc1\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "dd04befefa064057b4a510fe2a39ac6b",
          "experiment_id": "3",
          "run_name": "industrious-carp-180",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1675247862242,
          "end_time": 1675247862628,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/dd04befefa064057b4a510fe2a39ac6b/artifacts",
          "lifecycle_stage": "active",
          "run_id": "dd04befefa064057b4a510fe2a39ac6b"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1675247862341,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1675247862341,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1675247862341,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1675247862341,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "industrious-carp-180"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"dd04befefa064057b4a510fe2a39ac6b\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-01 10:37:42.370661\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"db93ea45f4d34262a989a45c994df931\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "b07b4b0be87b4912bea0c19e88828f1a",
          "experiment_id": "3",
          "run_name": "whimsical-calf-484",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1675247861794,
          "end_time": 1675247862208,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/b07b4b0be87b4912bea0c19e88828f1a/artifacts",
          "lifecycle_stage": "active",
          "run_id": "b07b4b0be87b4912bea0c19e88828f1a"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1675247861867,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1675247861867,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1675247861867,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1675247861867,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "whimsical-calf-484"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"b07b4b0be87b4912bea0c19e88828f1a\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-01 10:37:41.916859\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"32136f1413284816b8b6e8b9f4dbf4c2\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "Dup",
              "value": "1234"
            },
            {
              "key": "Dup ",
              "value": "1234"
            },
            {
              "key": " Dup",
              "value": "1234"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "17ee80261e154386903364ae5dac40a1",
          "experiment_id": "3",
          "run_name": "handsome-owl-379",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1675247861202,
          "end_time": 1675247861745,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/17ee80261e154386903364ae5dac40a1/artifacts",
          "lifecycle_stage": "active",
          "run_id": "17ee80261e154386903364ae5dac40a1"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1675247861264,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1675247861264,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1675247861264,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1675247861264,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "handsome-owl-379"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"17ee80261e154386903364ae5dac40a1\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-02-01 10:37:41.300552\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"224a702973fa491190e34195e2a5e4a1\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "697a69b0408542eb9a09fc496a06c7d7",
          "experiment_id": "3",
          "run_name": "amusing-pug-960",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1674819344787,
          "end_time": 1674819345155,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/697a69b0408542eb9a09fc496a06c7d7/artifacts",
          "lifecycle_stage": "active",
          "run_id": "697a69b0408542eb9a09fc496a06c7d7"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1674819344840,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1674819344840,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1674819344840,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1674819344840,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "amusing-pug-960"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"697a69b0408542eb9a09fc496a06c7d7\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-01-27 11:35:44.869507\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"8d09c4aceee54403ace4fee670af2c22\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.note.content",
              "value": "<p>This is notes for breast cancer model built by Vishnu </p><p>- Vinay</p>"
            },
            {
              "key": "key2",
              "value": "value2"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "66f6894f75d44a22b684ccfda21ac57f",
          "experiment_id": "3",
          "run_name": "stately-dog-643",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1674819344352,
          "end_time": 1674819344747,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/66f6894f75d44a22b684ccfda21ac57f/artifacts",
          "lifecycle_stage": "active",
          "run_id": "66f6894f75d44a22b684ccfda21ac57f"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1674819344412,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1674819344412,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1674819344412,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1674819344412,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "stately-dog-643"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"66f6894f75d44a22b684ccfda21ac57f\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-01-27 11:35:44.466457\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"ddd88b0d7b96453d935fd78071040b25\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "ca5082f5fc3c4b9b9d9ef9edd41d239a",
          "experiment_id": "3",
          "run_name": "puzzled-ox-379",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1674819343969,
          "end_time": 1674819344302,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/ca5082f5fc3c4b9b9d9ef9edd41d239a/artifacts",
          "lifecycle_stage": "active",
          "run_id": "ca5082f5fc3c4b9b9d9ef9edd41d239a"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1674819344017,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1674819344017,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1674819344017,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1674819344017,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "5"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "puzzled-ox-379"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"ca5082f5fc3c4b9b9d9ef9edd41d239a\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-01-27 11:35:44.041836\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"66d40f797e14496db1bafbda5e8a0b4f\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "88446d6ee23549c38b0389f971a2ecfa",
          "experiment_id": "3",
          "run_name": "righteous-skink-245",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1674819343557,
          "end_time": 1674819343923,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/88446d6ee23549c38b0389f971a2ecfa/artifacts",
          "lifecycle_stage": "active",
          "run_id": "88446d6ee23549c38b0389f971a2ecfa"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1674819343603,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1674819343603,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1674819343603,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1674819343603,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "righteous-skink-245"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"88446d6ee23549c38b0389f971a2ecfa\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-01-27 11:35:43.630967\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"511c313018b4460794c8801291baf6b3\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "3d1c34eb0763463198e07322b12523ba",
          "experiment_id": "3",
          "run_name": "fortunate-zebra-932",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1674819343124,
          "end_time": 1674819343516,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/3d1c34eb0763463198e07322b12523ba/artifacts",
          "lifecycle_stage": "active",
          "run_id": "3d1c34eb0763463198e07322b12523ba"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1674819343187,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1674819343187,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1674819343187,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1674819343187,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"3d1c34eb0763463198e07322b12523ba\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-01-27 11:35:43.215578\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"92e6999eda384a1c88b53ea5431a978b\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            },
            {
              "key": "mlflow.runName",
              "value": "fortunate-zebra-932"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "4302c772c8364ee78030d6636814f1c1",
          "experiment_id": "3",
          "run_name": "agreeable-stag-471",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1674819342749,
          "end_time": 1674819343078,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/4302c772c8364ee78030d6636814f1c1/artifacts",
          "lifecycle_stage": "active",
          "run_id": "4302c772c8364ee78030d6636814f1c1"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1674819342799,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1674819342799,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1674819342799,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1674819342799,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "4"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "agreeable-stag-471"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"4302c772c8364ee78030d6636814f1c1\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-01-27 11:35:42.826586\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"8ff8ae901f194fdb89a9f3f7ff7c2f40\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "00e2dbb0812c4c86ac22b9b04f600543",
          "experiment_id": "3",
          "run_name": "marvelous-fish-966",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1674819342337,
          "end_time": 1674819342699,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/00e2dbb0812c4c86ac22b9b04f600543/artifacts",
          "lifecycle_stage": "active",
          "run_id": "00e2dbb0812c4c86ac22b9b04f600543"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9384615384615385,
              "timestamp": 1674819342411,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9507042253521127,
              "timestamp": 1674819342411,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1674819342411,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9774436090225564,
              "timestamp": 1674819342411,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "20"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "marvelous-fish-966"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"00e2dbb0812c4c86ac22b9b04f600543\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-01-27 11:35:42.438074\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"32370a8a244a4069b48dfc13dd1b1651\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "2e495c9bfdb14b6bac24b5d73a966f17",
          "experiment_id": "3",
          "run_name": "auspicious-hen-575",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1674819341929,
          "end_time": 1674819342293,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/2e495c9bfdb14b6bac24b5d73a966f17/artifacts",
          "lifecycle_stage": "active",
          "run_id": "2e495c9bfdb14b6bac24b5d73a966f17"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9472527472527472,
              "timestamp": 1674819341987,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9595959595959594,
              "timestamp": 1674819341987,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9736842105263158,
              "timestamp": 1674819341987,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9777777777777777,
              "timestamp": 1674819341987,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "15"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "auspicious-hen-575"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"2e495c9bfdb14b6bac24b5d73a966f17\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-01-27 11:35:42.067014\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"215e1c34d1a246569ac1c2efcbd9ec64\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      },
      {
        "info": {
          "run_uuid": "e8ec640daedb4a9ea1932d06fbf69953",
          "experiment_id": "3",
          "run_name": "honorable-bat-814",
          "user_id": "ubuntu",
          "status": "FINISHED",
          "start_time": 1674819341292,
          "end_time": 1674819341881,
          "artifact_uri": "s3://rml-model-artifacts/users/admin/3/e8ec640daedb4a9ea1932d06fbf69953/artifacts",
          "lifecycle_stage": "active",
          "run_id": "e8ec640daedb4a9ea1932d06fbf69953"
        },
        "data": {
          "metrics": [
            {
              "key": "Train_accuracy",
              "value": 0.9516483516483516,
              "timestamp": 1674819341350,
              "step": 0
            },
            {
              "key": "Train_f1score",
              "value": 0.9628378378378377,
              "timestamp": 1674819341350,
              "step": 0
            },
            {
              "key": "Test_accuracy",
              "value": 0.9649122807017544,
              "timestamp": 1674819341350,
              "step": 0
            },
            {
              "key": "Test_f1score",
              "value": 0.9705882352941176,
              "timestamp": 1674819341350,
              "step": 0
            }
          ],
          "params": [
            {
              "key": "Estimator",
              "value": "DecisionTreeClassifier"
            },
            {
              "key": "ccp_alpha",
              "value": "0.0"
            },
            {
              "key": "class_weight",
              "value": "None"
            },
            {
              "key": "criterion",
              "value": "gini"
            },
            {
              "key": "max_depth",
              "value": "3"
            },
            {
              "key": "max_features",
              "value": "None"
            },
            {
              "key": "max_leaf_nodes",
              "value": "None"
            },
            {
              "key": "min_impurity_decrease",
              "value": "0.0"
            },
            {
              "key": "min_impurity_split",
              "value": "None"
            },
            {
              "key": "min_samples_leaf",
              "value": "10"
            },
            {
              "key": "min_samples_split",
              "value": "2"
            },
            {
              "key": "min_weight_fraction_leaf",
              "value": "0.0"
            },
            {
              "key": "random_state",
              "value": "None"
            },
            {
              "key": "splitter",
              "value": "best"
            }
          ],
          "tags": [
            {
              "key": "mlflow.user",
              "value": "ubuntu"
            },
            {
              "key": "mlflow.source.name",
              "value": "/miniconda/lib/python3.9/site-packages/ipykernel_launcher.py"
            },
            {
              "key": "mlflow.source.type",
              "value": "LOCAL"
            },
            {
              "key": "mlflow.runName",
              "value": "honorable-bat-814"
            },
            {
              "key": "mlflow.log-model.history",
              "value": "[{\"run_id\": \"e8ec640daedb4a9ea1932d06fbf69953\", \"artifact_path\": \"model\", \"utc_time_created\": \"2023-01-27 11:35:41.393649\", \"flavors\": {\"python_function\": {\"model_path\": \"model.pkl\", \"predict_fn\": \"predict\", \"loader_module\": \"mlflow.sklearn\", \"python_version\": \"3.9.6\", \"env\": {\"conda\": \"conda.yaml\", \"virtualenv\": \"python_env.yaml\"}}, \"sklearn\": {\"pickled_model\": \"model.pkl\", \"sklearn_version\": \"0.24.2\", \"serialization_format\": \"cloudpickle\", \"code\": null}}, \"model_uuid\": \"f2ce88359e3d4b71ba873fc7758729a9\", \"mlflow_version\": \"2.1.0\", \"signature\": {\"inputs\": \"[{\\\"name\\\": \\\"meanradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meantexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meancompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meansymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"meanfractaldimension\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"radiuserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"textureerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"perimetererror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"areaerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"smoothnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"compactnesserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavityerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"concavepointserror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"symmetryerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"fractaldimensionerror\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstradius\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worsttexture\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstperimeter\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstarea\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsmoothness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstcompactness\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavity\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstconcavepoints\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstsymmetry\\\", \\\"type\\\": \\\"double\\\"}, {\\\"name\\\": \\\"worstfractaldimension\\\", \\\"type\\\": \\\"double\\\"}]\", \"outputs\": \"[{\\\"type\\\": \\\"tensor\\\", \\\"tensor-spec\\\": {\\\"dtype\\\": \\\"int64\\\", \\\"shape\\\": [-1]}}]\"}, \"saved_input_example_info\": {\"artifact_path\": \"input_example.json\", \"type\": \"dataframe\", \"pandas_orient\": \"split\"}}]"
            }
          ]
        }
      }
    ]
  }

  let exp = {
    "experiments": [
      {
        "experiment_id": "20",
        "name": "efasfsfasfas",
        "artifact_location": "asdadasd",
        "lifecycle_stage": "active",
        "last_update_time": 1691588064149,
        "creation_time": 1691588064149
      },
      {
        "experiment_id": "19",
        "name": "syatkhdsdaskjsas",
        "artifact_location": "s3://rml-model-artifacts/users/admin/19",
        "lifecycle_stage": "active",
        "last_update_time": 1691588036260,
        "creation_time": 1691588036260
      },
      {
        "experiment_id": "17",
        "name": "Accertify Testing",
        "artifact_location": "s3://rml-model-artifacts/users/admin/17",
        "lifecycle_stage": "active",
        "last_update_time": 1686893714849,
        "creation_time": 1686893714849
      },
      {
        "experiment_id": "11",
        "name": "Latency Testing",
        "artifact_location": "s3://rml-model-artifacts/users/admin/11",
        "lifecycle_stage": "active",
        "last_update_time": 1681985439694,
        "creation_time": 1681985439694
      },
      {
        "experiment_id": "10",
        "name": "_Testing sorting functionality 01",
        "artifact_location": "s3://rml-model-artifacts/users/admin/10",
        "lifecycle_stage": "active",
        "last_update_time": 1687263009424,
        "creation_time": 1679638428893
      },
      {
        "experiment_id": "9",
        "name": "1234 Testing sorting functionality",
        "artifact_location": "s3://rml-model-artifacts/users/admin/9",
        "lifecycle_stage": "active",
        "last_update_time": 1679638318555,
        "creation_time": 1679638318555
      },
      {
        "experiment_id": "8",
        "name": "demo",
        "artifact_location": "s3://rml-model-artifacts/users/admin/8",
        "lifecycle_stage": "active",
        "last_update_time": 1678439973599,
        "creation_time": 1678439973599
      },
      {
        "experiment_id": "7",
        "name": "Tutorial - Bank Customer Churn",
        "artifact_location": "s3://rml-model-artifacts/users/admin/7",
        "lifecycle_stage": "active",
        "last_update_time": 1678439902476,
        "creation_time": 1678439902476
      },
      {
        "experiment_id": "6",
        "name": "Rename 1234",
        "artifact_location": "s3://rml-model-artifacts/users/admin/6",
        "lifecycle_stage": "active",
        "last_update_time": 1677741035783,
        "creation_time": 1675681553637,
        "tags": [
          {
            "key": "mlflow.note.content",
            "value": "<p><em><strong>Testing notes.</strong></em> </p>"
          }
        ]
      },
      {
        "experiment_id": "5",
        "name": "Test123",
        "artifact_location": "s3://rml-model-artifacts/users/admin/5",
        "lifecycle_stage": "active",
        "last_update_time": 1676873339445,
        "creation_time": 1675247919475
      },
      {
        "experiment_id": "4",
        "name": "nlp_demo_4",
        "artifact_location": "s3://rml-model-artifacts/users/admin/4",
        "lifecycle_stage": "active",
        "last_update_time": 1675080941895,
        "creation_time": 1675080941895,
        "tags": [
          {
            "key": "mlflow.note.content",
            "value": "<p><span style=\"background-color:#fbca04;\">This is a </span><em><strong><u><s><span style=\"background-color:#fbca04;\">test</span></s></u></strong></em><span style=\"background-color:#fbca04;\"> note. </span></p>"
          }
        ]
      },
      {
        "experiment_id": "3",
        "name": "Tutorial - Breast Cancer",
        "artifact_location": "s3://rml-model-artifacts/users/admin/3",
        "lifecycle_stage": "active",
        "last_update_time": 1674819341008,
        "creation_time": 1674819341008,
        "tags": [
          {
            "key": "mlflow.note.content",
            "value": "<h5><code><span style=\"color:#d93f0b;\">Testing 12345</span></code></h5>"
          }
        ]
      },
      {
        "experiment_id": "2",
        "name": "nlp_demo_41",
        "artifact_location": "s3://rml-model-artifacts/users/admin/2",
        "lifecycle_stage": "active",
        "last_update_time": 1675047441336,
        "creation_time": 1673441368170,
        "tags": [
          {
            "key": "mlflow.note.content",
            "value": "**testing**"
          }
        ]
      }
    ]
  }

  let modals = {
    "registered_models": [
      {
        "name": "NLP",
        "creation_timestamp": 1672759752149,
        "last_updated_timestamp": 1672759752448,
        "latest_versions": [
          {
            "name": "NLP",
            "version": "1",
            "creation_timestamp": 1672759752448,
            "last_updated_timestamp": 1672759752448,
            "current_stage": "None",
            "description": "",
            "source": "s3://rml-model-artifacts/users/admin/1/477e3e3be5494a13846fc0571ea76a65/artifacts/model",
            "run_id": "477e3e3be5494a13846fc0571ea76a65",
            "status": "READY",
            "tags": [
              {
                "key": "Company",
                "value": "RocketML"
              }
            ],
            "run_link": ""
          }
        ]
      }
    ]
  }